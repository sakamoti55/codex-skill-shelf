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
    "label": "アウトプット保存",
    "category": "Utility",
    "description": "GPTやCodexの出力をユーザーのObsidian受信箱に保存したり、未整理の出力を知識・タスク・日次サマリーに整理したりする。出力の保存や受信箱への追加、出力整理を依頼されたとき、または定期的な整理処理を実行するときに使う。",
    "updated": "2026-09-19",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/output-capture"
  },
  {
    "name": "skill-generator",
    "label": "Skill生成",
    "category": "Utility",
    "description": "新しいCodex Skillを作成・更新し、検証、Skill Shelfへの同期、公開まで行う。Skillを作りたい、登録したい、掲載したい、またはこの作業自体をSkill化したいと依頼されたときに使う。",
    "updated": "2026-09-19",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/skill-generator"
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
