# Skill Shelf

Personal Codex skills, versioned with Git and presented as a searchable private library.

Private site: https://skill-shelf.kohseimeimei.chatgpt.site

## Sync

`npm run sync:skills` copies only the self-created skills listed in `owned-skills.json` from `~/.codex/skills` into `skills/` and regenerates the site catalog. `npm run build` refreshes the catalog from the repository before building.

The repository intentionally excludes Codex system skills, plugin-managed caches, and installed skills that the user did not create.
