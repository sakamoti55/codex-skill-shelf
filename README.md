# Skill Shelf

Gitで管理している自作Codex Skillを、検索・閲覧できる個人ライブラリとして公開しています。

公開サイト: https://skill-shelf.skmtech.jp

## 同期

`npm run sync:skills` は、`owned-skills.json` に登録された自作Skillだけを `~/.codex/skills` から `skills/` にコピーし、サイトの一覧データを再生成します。

`npm run build` は、リポジトリ内のSkillから一覧データを更新してからサイトをビルドします。

自作Skillの説明、見出し、本文、UI表示文は原則として日本語で管理します。Skill名、コード、コマンド、API名、ファイルパスなどの識別子は英語のまま扱います。

## CI/CD

Pull RequestではLintとビルドを実行します。`main` へのpushでは同じ検証に成功した後、Cloudflareのデプロイ設定が有効な場合にSkill Shelfを自動反映します。

- Repository variable: `CLOUDFLARE_ACCOUNT_ID`
- Repository variable: `CLOUDFLARE_DEPLOY_ENABLED=true`
- Repository secret: `CLOUDFLARE_API_TOKEN`

公開ドメインは `skmtech.jp` 配下を使います。Skill Shelfは `skill-shelf.skmtech.jp` です。

## 収録対象

このリポジトリには、CodexのシステムSkill、プラグイン管理のキャッシュ、ユーザーが作成していない導入済みSkillは含めません。
