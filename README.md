# Skill Shelf

Gitで管理している自作Codex Skillを、検索・閲覧できる個人ライブラリとして公開しています。

公開サイト: https://skill-shelf.kohseimeimei.chatgpt.site

## 同期

`npm run sync:skills` は、`owned-skills.json` に登録された自作Skillだけを `~/.codex/skills` から `skills/` にコピーし、サイトの一覧データを再生成します。

`npm run build` は、リポジトリ内のSkillから一覧データを更新してからサイトをビルドします。

## 収録対象

このリポジトリには、CodexのシステムSkill、プラグイン管理のキャッシュ、ユーザーが作成していない導入済みSkillは含めません。
