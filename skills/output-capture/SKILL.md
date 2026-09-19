---
name: output-capture
description: Capture GPT/Codex outputs into the user's Obsidian inbox, or organize pending Obsidian outputs into knowledge, tasks, and a daily summary. Use when the user asks to save an output/inbox, or when the recurring output整理 workflow runs.
---

# Output Capture

Use the canonical Obsidian Vault through `/Users/kose/Documents/ChatGPT/Obsidian タスク管理/sakamoti55`. It is an intentional symlink to the user's iCloud Vault; do not copy it or create a second Vault. Read the project's `AGENTS.md` and `sakamoti55/99_System/Config/保管庫運用ルール.md` before changing files.

This skill has two modes. Choose based on the user's request or the scheduled prompt.

## Capture mode

Use when the user asks to save a GPT/Codex output, put something in the inbox, or otherwise capture the text for later整理.

- Append under `sakamoti55/90_Inbox/Inbox.md` → `## Capture`.
- Use `- [ ] YYYY-MM-DD HH:mm <content>` with the current local date and time (Asia/Tokyo).
- Preserve the user's wording and meaning. Do not classify, summarize, or create a task while capturing.
- Do not capture every chat message automatically; capture only the content the user identifies as an output or asks to save.
- Report the file written and the captured text briefly.

## Organize mode

Use when the user asks to整理, or when a scheduled run invokes this skill. Process all pending items regardless of their date.

### Inputs

- Unchecked, non-empty checkbox items under `sakamoti55/90_Inbox/Inbox.md` → `## Capture`.
- Non-empty bullet items under `## アウトプット` in every file below `sakamoti55/01_Daily/` that do not already have a `整理済み` HTML comment at the end of the line.
- For backward compatibility, also read `## 気づき（素材）` and `## アウトプット候補` in older Daily notes.
- Ignore blank placeholders and checkboxes under other headings.

### Changes

- Integrate each item into an existing file in `sakamoti55/02_Outputs/Categories/`, using the content to choose the category. Keep one concise line (about 80 Japanese characters or less), avoid duplicate meanings, and add at most one Wiki link to the source when useful. Put uncategorized everyday insights in `90_生活・自己理解.md`.
- Only create or update a task in `sakamoti55/00_HOME/TASKS.md` when the text clearly expresses an intention to act (for example, buy, research, book, submit, or apply). Use a concrete `verb + completion condition` under the appropriate Next Actions category. Do not turn an observation or vague wish into a task, duplicate an existing task, or infer completion.
- After processing, change Inbox items to `[x]` without deleting their original text. Add `<!-- 整理済み: YYYY-MM-DD -->` to processed Daily lines.
- Append a timestamped change summary to `sakamoti55/99_System/Logs/アウトプット整理.md`. If there are no pending items, do not change Outputs, TASKS, or the log.

### Daily summary

Every organize run must update the current Daily note at `sakamoti55/01_Daily/YYYY/MM/YYYY-MM-DD.md`. If it does not exist, create it using the structure of `sakamoti55/99_System/Templates/temp_daily_notes.md`, resolving the date and links rather than leaving template expressions.

Replace only the content between `<!-- AUTO_SUMMARY_START -->` and `<!-- AUTO_SUMMARY_END -->` under `## 今日のまとめ（自動）`; if the section or markers are missing, insert them immediately before `## 終了`. Summarize the current day's Daily outputs and today's dated Inbox entries, including:

- 最終更新日時
- 今日の主な気づき・アウトプット
- 今日または今回タスク化したこと
- 判断保留

Write `なし` when a section has no items. The evening run replaces the morning summary with the full day-to-date summary; do not append duplicate summaries.

Always return the same concise summary in the Codex result, including counts for newly integrated outputs, added/updated tasks, and pending decisions, even when all counts are zero.

## Boundaries

Only edit the Inbox, Daily notes, category Outputs, `00_HOME/TASKS.md`, the output整理 log, and the current project's guidance when explicitly asked. Do not delete source notes, modify unrelated Obsidian sections, or browse the web for ordinary capture/整理.
