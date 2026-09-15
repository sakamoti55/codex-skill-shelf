---
name: skill-shelf-sync
description: Keep the user's personal Codex skills versioned and visible in Skill Shelf. Use after creating or updating a skill, or when the user asks to sync, publish, list, or back up their skills.
---

# Skill Shelf Sync

The Skill Shelf repository is `/Users/kose/Documents/Codex/2026-09-15/token/work/skill-studio`. Personal skills live in `/Users/kose/.codex/skills`.

After a personal skill is created or changed:

1. Validate the changed skill with the skill-creator validator.
2. From the Skill Shelf repository, run `npm run sync:skills`. This copies every non-system top-level skill containing `SKILL.md` into `skills/` and regenerates the site catalog.
3. Review the Git diff. Do not include secrets, caches, virtual environments, build outputs, or unrelated files.
4. Run the site build.
5. Commit and push the skill and catalog changes to the configured Git remote with a concise commit message.
6. Publish the updated private Skill Shelf site unless the user requested local-only work. If publishing requires a separate authorization or is unavailable, finish the repository sync and report that the live site is pending.

The repository is a versioned mirror of the discoverable personal skills directory. Do not copy `.system` skills or plugin-managed cache contents. Preserve complete skill folders, including their `agents`, `references`, `scripts`, and `assets` subdirectories.
