# Skill Shelf

Personal Codex skills, versioned with Git and presented as a searchable private library.

Private site: https://skill-shelf.kohseimeimei.chatgpt.site

## Sync

`npm run sync:skills` copies every non-system skill from `~/.codex/skills` into `skills/` and regenerates the site catalog. `npm run build` refreshes the catalog from the repository before building.

The repository intentionally excludes Codex system skills and plugin-managed caches.
