import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const repositorySkills = join(root, 'skills');
const generatedFile = join(root, 'app', 'generated-skills.ts');
const ownedSkillsFile = join(root, 'owned-skills.json');
const copyLocal = process.argv.includes('--copy-local');
const localSkills = process.env.CODEX_SKILLS_SOURCE ?? join(homedir(), '.codex', 'skills');

const ignored = new Set(['.DS_Store', '__pycache__', 'node_modules', '.venv', 'dist']);

function scalar(value) {
  const clean = value.trim();
  if (clean.startsWith('"') && clean.endsWith('"')) {
    try { return JSON.parse(clean); } catch { return clean.slice(1, -1); }
  }
  if (clean.startsWith("'") && clean.endsWith("'")) return clean.slice(1, -1);
  return clean;
}

function frontmatter(markdown) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  const source = match?.[1] ?? '';
  const name = source.match(/^name:\s*(.+)$/m);
  const description = source.match(/^description:\s*(.+)$/m);
  return {
    name: name ? scalar(name[1]) : '',
    description: description ? scalar(description[1]) : '',
  };
}

function interfaceName(yaml, fallback) {
  const match = yaml.match(/^\s*display_name:\s*(.+)$/m);
  return match ? scalar(match[1]) : fallback.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function category(name, description) {
  const text = `${name} ${description}`.toLowerCase();
  if (name === 'calendar-event-routing' || name === 'obsidian-quick-search' || name === 'skill-shelf-sync') return 'Personal';
  if (text.includes('cloudflare') || text.includes('worker') || text.includes('wrangler') || text.includes('durable')) return 'Cloudflare';
  if (text.includes('image') || text.includes('pet') || text.includes('visual')) return 'Creative';
  if (text.includes('web') || text.includes('browser')) return 'Web';
  return 'Utility';
}

async function copyPersonalSkills() {
  const ownedSkills = new Set(JSON.parse(await readFile(ownedSkillsFile, 'utf8')));
  await rm(repositorySkills, { recursive: true, force: true });
  await mkdir(repositorySkills, { recursive: true });
  const entries = await readdir(localSkills, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory() || !ownedSkills.has(entry.name)) continue;
    const source = join(localSkills, entry.name);
    try { await stat(join(source, 'SKILL.md')); } catch { continue; }
    await cp(source, join(repositorySkills, entry.name), {
      recursive: true,
      filter: (path) => !ignored.has(relative(source, path).split('/').at(-1)),
    });
  }
}

async function buildCatalog() {
  await mkdir(repositorySkills, { recursive: true });
  const entries = await readdir(repositorySkills, { withFileTypes: true });
  const skills = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;
    const skillFile = join(repositorySkills, entry.name, 'SKILL.md');
    let markdown;
    try { markdown = await readFile(skillFile, 'utf8'); } catch { continue; }
    const meta = frontmatter(markdown);
    let yaml = '';
    try { yaml = await readFile(join(repositorySkills, entry.name, 'agents', 'openai.yaml'), 'utf8'); } catch {}
    const fileStat = await stat(skillFile);
    const name = meta.name || entry.name;
    skills.push({
      name,
      label: interfaceName(yaml, name),
      category: category(name, meta.description),
      description: meta.description,
      updated: fileStat.mtime.toISOString().slice(0, 10),
      repositoryUrl: `https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/${encodeURIComponent(entry.name)}`,
    });
  }
  skills.sort((a, b) => a.name === 'calendar-event-routing' ? -1 : b.updated.localeCompare(a.updated) || a.name.localeCompare(b.name));
  const contents = `export const skills = ${JSON.stringify(skills, null, 2)} as const;\n`;
  await writeFile(generatedFile, contents, 'utf8');
  console.log(`Generated catalog with ${skills.length} self-created skills.`);
}

if (copyLocal) await copyPersonalSkills();
await buildCatalog();
