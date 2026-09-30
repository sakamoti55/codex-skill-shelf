export const skills = [
  {
    "name": "calendar-event-routing",
    "label": "カレンダー振り分け",
    "category": "Personal",
    "description": "Googleカレンダーへ予定を追加するとき、内容から文脈を読み取り、既存の適切な所属カレンダーへ振り分ける。予定の追加・登録・スケジュールを依頼されたときに使う。",
    "updated": "2026-09-30",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/calendar-event-routing"
  },
  {
    "name": "obsidian-carryover-tasks",
    "label": "Obsidian未完了タスク繰越",
    "category": "Utility",
    "description": "Obsidianの日次ノートで、昨日以前から残っている未完了タスクを今日のタスク欄へ重複なく繰り越す。朝の定期整理や「昨日までのやり残しを今日へ追加して」と依頼されたときに使う。",
    "updated": "2026-09-30",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/obsidian-carryover-tasks"
  },
  {
    "name": "output-capture",
    "label": "アウトプット保存",
    "category": "Utility",
    "description": "GPTやCodexで生まれたアウトプットを、Obsidian内の現在のプロジェクトへ即時に整理して保存するか、プロジェクト外では共通Inboxへ蓄積し、未整理項目を知識・タスク・日次サマリーへ整理する。プロジェクト内で学習・研究・活動の記録を残すとき、出力の保存や整理を頼まれたとき、または定期整理で使う。",
    "updated": "2026-09-30",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/output-capture"
  },
  {
    "name": "skill-generator",
    "label": "Skill生成",
    "category": "Utility",
    "description": "新しいCodex Skillを作成・更新し、検証、Skill Shelfへの同期、公開まで行う。Skillを作りたい、登録したい、掲載したい、またはこの作業自体をSkill化したいと依頼されたときに使う。",
    "updated": "2026-09-30",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/skill-generator"
  },
  {
    "name": "skill-shelf-sync",
    "label": "Skill Shelf同期",
    "category": "Personal",
    "description": "ユーザー自身が作成したCodexスキルだけをGitで履歴管理し、Skill Shelfへ反映する。自作スキルの作成・更新後や、同期・公開・一覧・バックアップを依頼されたときに使う。",
    "updated": "2026-09-30",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/skill-shelf-sync"
  }
] as const;
