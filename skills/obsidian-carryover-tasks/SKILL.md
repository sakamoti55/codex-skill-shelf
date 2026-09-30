---
name: obsidian-carryover-tasks
description: Obsidianの日次ノートで、昨日以前から残っている未完了タスクを今日のタスク欄へ重複なく繰り越す。朝の定期整理や「昨日までのやり残しを今日へ追加して」と依頼されたときに使う。
---

# Obsidian未完了タスク繰越

標準Vaultは `/Users/kose/Documents/ChatGPT/Obsidian タスク管理/sakamoti55` とする。

`scripts/carryover_tasks.py` を実行し、`00_HOME/TASKS.md` を正本として今日の日次ノートを更新する。

```bash
python3 scripts/carryover_tasks.py
```

- 過去の日次ノートで選ばれたTASKSリンクのうち、TASKS側で現在も未完了のものを繰り越す。
- TASKS内で期限が昨日以前の未完了タスクも対象にする。
- 今日の日次ノートの `## 今日のタスク` に、TASKSの該当見出しへのリンクとして追加する。
- 自動生成範囲だけを更新し、手書き項目、TASKSのチェック状態、元ノートは変更しない。
- 同じ日に再実行しても重複させない。
- 今日の日次ノートがなければ日次テンプレートを基に作成し、日付を当日に合わせる。

確認だけなら `--dry-run`、対象日の再現テストには `--date YYYY-MM-DD` を使う。完了時は対象日、追加対象数、更新したファイルを簡潔に報告する。
