#!/usr/bin/env python3
"""Carry unfinished Obsidian tasks into today's Daily note."""

from __future__ import annotations

import argparse
import re
from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path


DEFAULT_VAULT = Path("/Users/kose/Documents/ChatGPT/Obsidian タスク管理/sakamoti55")
AUTO_START = "<!-- AUTO_CARRYOVER_START -->"
AUTO_END = "<!-- AUTO_CARRYOVER_END -->"
TASK_LINE = re.compile(r"^\s*- \[ \] (.+?)\s*$")
HEADING = re.compile(r"^###\s+(.+?)\s*$")
TASK_LINK = re.compile(r"^\s*- (?:\[ \] )?\[\[00_HOME/TASKS#([^|\]]+)\|([^\]]+)\]\]\s*$")
DUE_DATE = re.compile(r"📅\s*(\d{4}-\d{2}-\d{2})")


@dataclass(frozen=True)
class Task:
    section: str
    label: str
    raw: str

    @property
    def link(self) -> str:
        return f"- [ ] [[00_HOME/TASKS#{self.section}|{self.label}]]"


def task_label(raw: str) -> str:
    value = DUE_DATE.sub("", raw)
    value = re.sub(r"\s+\[\[[^\]]+\]\]\s*$", "", value)
    return value.strip()


def read_open_tasks(tasks_file: Path) -> list[Task]:
    section = "Capture"
    tasks: list[Task] = []
    for line in tasks_file.read_text(encoding="utf-8").splitlines():
        heading = HEADING.match(line)
        if heading:
            section = heading.group(1)
            continue
        match = TASK_LINE.match(line)
        if match and task_label(match.group(1)):
            tasks.append(Task(section, task_label(match.group(1)), match.group(1)))
    return tasks


def daily_path(vault: Path, target: date) -> Path:
    return vault / "01_Daily" / f"{target:%Y}" / f"{target:%m}" / f"{target:%Y-%m-%d}.md"


def previous_task_labels(vault: Path, target: date) -> set[str]:
    labels: set[str] = set()
    daily_root = vault / "01_Daily"
    for path in daily_root.glob("????/??/????-??-??.md"):
        try:
            note_date = date.fromisoformat(path.stem)
        except ValueError:
            continue
        if note_date >= target:
            continue
        for line in path.read_text(encoding="utf-8").splitlines():
            match = TASK_LINK.match(line)
            if match:
                labels.add(match.group(2).strip())
    return labels


def select_tasks(tasks: list[Task], carried_labels: set[str], cutoff: date) -> list[Task]:
    selected: list[Task] = []
    seen: set[str] = set()
    for task in tasks:
        due = DUE_DATE.search(task.raw)
        overdue = bool(due and date.fromisoformat(due.group(1)) <= cutoff)
        if (task.label in carried_labels or overdue) and task.label not in seen:
            selected.append(task)
            seen.add(task.label)
    return selected


def new_daily_note(vault: Path, target: date) -> str:
    template = vault / "99_System" / "Templates" / "temp_daily_notes.md"
    if template.exists():
        content = template.read_text(encoding="utf-8")
        content = re.sub(r"(?m)^date:\s*\d{4}-\d{2}-\d{2}$", f"date: {target.isoformat()}", content)
        content = re.sub(r"(?m)^# \d{4}-\d{2}-\d{2}$", f"# {target.isoformat()}", content)
        return content
    return f"---\ndate: {target.isoformat()}\ntags: [daily]\n---\n\n# {target.isoformat()}\n\n## 今日のタスク\n\n## メモ\n\n- \n"


def update_today(content: str, tasks: list[Task]) -> str:
    block = "\n".join([AUTO_START, *(task.link for task in tasks), AUTO_END])
    if AUTO_START in content and AUTO_END in content:
        return re.sub(
            re.escape(AUTO_START) + r".*?" + re.escape(AUTO_END),
            block,
            content,
            flags=re.DOTALL,
        )

    heading = re.search(r"(?m)^## 今日のタスク\s*$", content)
    if not heading:
        insert_at = content.find("\n## ルーティン")
        addition = f"\n## 今日のタスク\n\n{block}\n"
        return content[:insert_at] + addition + content[insert_at:] if insert_at >= 0 else content.rstrip() + addition + "\n"

    section_end = re.search(r"(?m)^## ", content[heading.end():])
    end = heading.end() + (section_end.start() if section_end else len(content[heading.end():]))
    section = content[heading.end():end].rstrip()
    return content[:heading.end()] + section + "\n\n" + block + "\n\n" + content[end:].lstrip("\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--vault", type=Path, default=DEFAULT_VAULT)
    parser.add_argument("--date", type=date.fromisoformat, default=date.today())
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    tasks_file = args.vault / "00_HOME" / "TASKS.md"
    if not tasks_file.exists():
        parser.error(f"TASKSが見つかりません: {tasks_file}")

    open_tasks = read_open_tasks(tasks_file)
    carried = previous_task_labels(args.vault, args.date)
    selected = select_tasks(open_tasks, carried, args.date - timedelta(days=1))
    target = daily_path(args.vault, args.date)
    original = target.read_text(encoding="utf-8") if target.exists() else new_daily_note(args.vault, args.date)
    updated = update_today(original, selected)

    if not args.dry_run and updated != original:
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(updated, encoding="utf-8")

    print(f"対象日: {args.date.isoformat()}")
    print(f"繰越対象: {len(selected)}件")
    for task in selected:
        print(task.link)
    print(f"更新先: {target}")
    print("変更: なし" if updated == original else ("変更: dry-run" if args.dry_run else "変更: 更新済み"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
