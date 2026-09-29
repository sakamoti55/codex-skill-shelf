---
name: skill-generator
description: 新しいCodex Skillを作成・更新し、検証、Skill Shelfへの同期、公開まで行う。Skillを作りたい、登録したい、掲載したい、またはこの作業自体をSkill化したいと依頼されたときに使う。
---

# Skill生成

ユーザーの要件をもとに、再利用できるCodex Skillを作成または更新する。Skillの内容が提示されている場合は、意図と制約を保ったまま反映する。

## 作成

- 保存先は指定がなければ `/Users/kose/.codex/skills/<skill-name>/` とする。
- Skill名は小文字・数字・ハイフンで、短く識別しやすくする。既存Skillがある場合は初期化せず更新する。
- 必須の `SKILL.md` と、必要な場合だけ `agents/openai.yaml`、`scripts/`、`references/`、`assets/` を作成する。
- 自作Skillの説明、見出し、本文、UI表示文は原則として日本語で作成・更新する。Skill名、コード、コマンド、API名、ファイルパスなどの識別子は英語のままでよい。ユーザーが別の言語を明示した場合はその指定を優先する。
- 既存Skillに英語の説明文が残っている場合は、意味と制約を保って日本語へ直す。外部提供Skillやシステム管理Skillは改変しない。
- Webサイトを作成・公開する場合は、ユーザーが指定した独自ドメインを優先し、`kohseimeimei.chatgpt.site` を既定の公開先として使わない。今回の公開先は `skmtech.jp` 配下とする。
- `SKILL.md` には、適用条件、目的、判断に必要な制約だけを書く。ユーザーが明示していない外部操作や権限を暗黙に追加しない。
- `agents/openai.yaml` のUI表示名・短い説明・既定プロンプトはSkillの内容と一致させる。通常は自動選択を有効にする。

## 検証とShelf掲載

ユーザーがローカル限定を指定していない場合は、作成後に次を行う。

1. `/Users/kose/.codex/skills/.system/skill-creator/scripts/quick_validate.py` でSkillを検証する。
2. `SKILL.md` と `agents/openai.yaml` の説明文が原則として日本語になっていることを確認する。
3. 自作Skillだけを `/Users/kose/Documents/Codex/2026-09-15/token/work/skill-studio/owned-skills.json` に追加する。既存の導入済みSkillを所有Skillとして追加しない。
4. Skill Shelfで `npm run sync:skills` を実行し、一覧データとSkillフォルダを同期する。
5. 差分を確認し、秘密情報、キャッシュ、ビルド成果物、無関係なファイルを含めない。
6. `npm run build` と、必要に応じて `npm run lint` を実行する。
7. 簡潔なコミットを作成して、設定済みリモートへプッシュする。
8. `main` へのpush後、GitHub Actionsの `Skill Shelf CI/CD` を確認する。デプロイ設定が有効なら、検証後にCloudflare Workersへ自動反映されるまで待つ。デプロイ用の資格情報または有効化設定が不足している場合は、リポジトリ同期まで完了し、サイト反映が保留であることを報告する。ローカル限定の場合は、同期・コミット・公開を行わない。

Skill Shelfのリポジトリは `/Users/kose/Documents/Codex/2026-09-15/token/work/skill-studio`、個人Skillの場所は `/Users/kose/.codex/skills` とする。公開はリポジトリのCI/CDを正本とし、ユーザーが明示しない限り公開範囲やドメインを変更しない。

完了時は、作成または更新したSkill名、検証・ビルド・CI/CDの結果、Skill ShelfのURLを簡潔に報告する。
