---
name: obsidian-quick-search
description: Search the user's Obsidian vault quickly for tasks, daily notes, goals, and monthly outputs from short Japanese requests such as「今月のタスク」「今日のメモ」「目標」.
metadata:
  short-description: Obsidianの定番検索を短文で実行
---

# Obsidian Quick Search

Use the canonical vault at `/Users/kose/Documents/ChatGPT/Obsidian タスク管理/sakamoti55` (a symlink; do not copy it).

For recurring lookups, run `scripts/quick-search.sh` instead of reconstructing paths manually. Pass one of `today`, `month`, `tasks`, `goals`, `outputs`, or a free-text query. The script uses the current local date unless `--date YYYY-MM-DD` is supplied.

Interpret Japanese shortcuts:

- 「今日」「今日のメモ」→ `today`
- 「今月のタスク」「今月」→ `month`
- 「タスク」「やること」→ `tasks`
- 「目標」→ `goals`
- 「成果物」「アウトプット」→ `outputs`

Read the returned files and answer from their contents. For a monthly task request, combine the current month's daily notes with `00_HOME/TASKS.md`, clearly separating dated tasks from the master list. Do not claim completion status from a link alone; inspect the checkbox text.

The companion hook-style dispatcher is `scripts/search-hook.sh`: it accepts a natural-language request and prints the resolved lookup plus results. Use it for quick local testing or shell integrations; it does not alter Codex global configuration.
