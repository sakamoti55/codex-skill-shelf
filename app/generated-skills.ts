export const skills = [
  {
    "name": "calendar-event-routing",
    "label": "カレンダー振り分け",
    "category": "Personal",
    "description": "Googleカレンダーへ予定を追加するとき、内容から文脈を読み取り、既存の適切な所属カレンダーへ振り分ける。予定の追加・登録・スケジュールを依頼されたときに使う。",
    "updated": "2026-09-19",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/calendar-event-routing"
  },
  {
    "name": "output-capture",
    "label": "Output Capture",
    "category": "Utility",
    "description": "Capture GPT/Codex outputs into the user's Obsidian inbox, or organize pending Obsidian outputs into knowledge, tasks, and a daily summary. Use when the user asks to save an output/inbox, or when the recurring output整理 workflow runs.",
    "updated": "2026-09-19",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/output-capture"
  },
  {
    "name": "skill-shelf-sync",
    "label": "Skill Shelf同期",
    "category": "Personal",
    "description": "ユーザー自身が作成したCodexスキルだけをGitで履歴管理し、Skill Shelfへ反映する。自作スキルの作成・更新後や、同期・公開・一覧・バックアップを依頼されたときに使う。",
    "updated": "2026-09-19",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/skill-shelf-sync"
  }
] as const;
