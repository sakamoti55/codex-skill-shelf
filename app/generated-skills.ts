export const skills = [
  {
    "name": "calendar-event-routing",
    "label": "Calendar Event Routing",
    "category": "Personal",
    "description": "Route new Google Calendar events to the user's existing calendar by inferring the event's context (for example, job-hunting events go to the 「就活」 calendar). Use when the user asks to add, schedule, or register an event.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/calendar-event-routing"
  },
  {
    "name": "agents-sdk",
    "label": "Agents Sdk",
    "category": "Cloudflare",
    "description": "Build AI agents on Cloudflare Workers using the Agents SDK. Load when creating stateful agents, durable workflows, real-time WebSocket apps, scheduled tasks, MCP servers, chat applications, voice agents, or browser automation. Covers Agent class, state management, callable RPC, Workflows, durable execution, queues, retries, observability, and React hooks. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/agents-sdk"
  },
  {
    "name": "cloudflare",
    "label": "Cloudflare",
    "category": "Cloudflare",
    "description": "Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), feature flags (Flagship), networking (Tunnel, Spectrum), security (WAF, DDoS), and infrastructure-as-code (Terraform, Pulumi). Use for any Cloudflare development task. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/cloudflare"
  },
  {
    "name": "cloudflare-email-service",
    "label": "Cloudflare Email Service",
    "category": "Cloudflare",
    "description": "Send and receive transactional emails with Cloudflare Email Service (Email Sending + Email Routing). Use when building email sending (Workers binding or REST API), email routing, Agents SDK email handling, or integrating email into any app — Workers, Node.js, Python, Go, etc. Also use for email deliverability, SPF/DKIM/DMARC, wrangler email setup, MCP email tools, or when a coding agent needs to send emails. Even for simple requests like \"add email to my Worker\" — this skill has critical config details.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/cloudflare-email-service"
  },
  {
    "name": "cloudflare-one",
    "label": "Cloudflare One",
    "category": "Cloudflare",
    "description": "Guides Cloudflare One Zero Trust and SASE work across Access, Gateway, WARP, Tunnel, Cloudflare WAN, DLP, CASB, device posture, and identity. Use when designing, configuring, troubleshooting, or reviewing Cloudflare One deployments. Retrieval-first: use current Cloudflare docs/API schemas instead of embedded product docs.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/cloudflare-one"
  },
  {
    "name": "cloudflare-one-migrations",
    "label": "Cloudflare One Migrations",
    "category": "Cloudflare",
    "description": "Plans migrations from Zscaler ZIA/ZPA, Palo Alto, legacy VPN, SWG, or SASE stacks to Cloudflare One. Use for migration assessments, policy mapping, rollout plans, and parity/gap analysis.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/cloudflare-one-migrations"
  },
  {
    "name": "durable-objects",
    "label": "Durable Objects",
    "category": "Cloudflare",
    "description": "Create and review Cloudflare Durable Objects. Use when building stateful coordination (chat rooms, multiplayer games, booking systems), implementing RPC methods, SQLite storage, alarms, WebSockets, or reviewing DO code for best practices. Covers Workers integration, wrangler config, and testing with Vitest. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/durable-objects"
  },
  {
    "name": "hatch-pet",
    "label": "Hatch Pet",
    "category": "Creative",
    "description": "Create, repair, validate, visually QA, and package Codex-compatible v2 animated pets from character art, generated images, company or prospect brand cues, or visual references. Use for any new Codex pet, custom mascot, non-pixel pet style, brand-inspired pet, existing-pet repair, or 8x11 spritesheet workflow requiring all 9 standard animation rows, 16 look directions, deterministic assembly, QA artifacts, and spriteVersionNumber 2 packaging.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/hatch-pet"
  },
  {
    "name": "obsidian-quick-search",
    "label": "Obsidian Quick Search",
    "category": "Personal",
    "description": "Search the user's Obsidian vault quickly for tasks, daily notes, goals, and monthly outputs from short Japanese requests such as「今月のタスク」「今日のメモ」「目標」.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/obsidian-quick-search"
  },
  {
    "name": "sandbox-sdk",
    "label": "Sandbox Sdk",
    "category": "Cloudflare",
    "description": "Build sandboxed applications for secure code execution. Load when building AI code execution, code interpreters, CI/CD systems, interactive dev environments, or executing untrusted code. Covers Sandbox SDK lifecycle, commands, files, code interpreter, and preview URLs. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/sandbox-sdk"
  },
  {
    "name": "skill-shelf-sync",
    "label": "Skill Shelf Sync",
    "category": "Personal",
    "description": "Keep the user's personal Codex skills versioned and visible in Skill Shelf. Use after creating or updating a skill, or when the user asks to sync, publish, list, or back up their skills.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/skill-shelf-sync"
  },
  {
    "name": "turnstile-spin",
    "label": "Turnstile Spin",
    "category": "Cloudflare",
    "description": "Set up Cloudflare Turnstile end-to-end in a project. Scan the codebase, create the widget via the Cloudflare API, embed it on the right forms, wire canonical server-side siteverify in the customer's existing backend, validate, and persist the skill. Load this when a user asks to add Turnstile, set up CAPTCHA, protect a form from bots, or fix a Turnstile integration. Mirrors developers.cloudflare.com/turnstile/spin.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/turnstile-spin"
  },
  {
    "name": "web-perf",
    "label": "Web Perf",
    "category": "Web",
    "description": "Analyzes web performance using Chrome DevTools MCP. Measures Core Web Vitals (LCP, INP, CLS) and supplementary metrics (FCP, TBT, Speed Index), identifies render-blocking resources, network dependency chains, layout shifts, caching issues, and accessibility gaps. Use when asked to audit, profile, debug, or optimize page load performance, Lighthouse scores, or site speed. Biases towards retrieval from current documentation over pre-trained knowledge.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/web-perf"
  },
  {
    "name": "workers-best-practices",
    "label": "Workers Best Practices",
    "category": "Cloudflare",
    "description": "Reviews and authors Cloudflare Workers code against production best practices. Load when writing new Workers, reviewing Worker code, configuring wrangler.jsonc, or checking for common Workers anti-patterns (streaming, floating promises, global state, secrets, bindings, observability). Biases towards retrieval from Cloudflare docs over pre-trained knowledge.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/workers-best-practices"
  },
  {
    "name": "wrangler",
    "label": "Wrangler",
    "category": "Cloudflare",
    "description": "Cloudflare Workers CLI for deploying, developing, and managing Workers, KV, R2, D1, Vectorize, Hyperdrive, Workers AI, Containers, Queues, Workflows, Pipelines, and Secrets Store. Load before running wrangler commands to ensure correct syntax and best practices. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.",
    "updated": "2026-09-15",
    "repositoryUrl": "https://github.com/sakamoti55/codex-skill-shelf/tree/main/skills/wrangler"
  }
] as const;
