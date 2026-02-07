# Prompt Gallery

VitePress-basierte Prompt Gallery mit interaktiver Prompt-Generierung, dynamischer Kategorienavigation und GitHub-Pages-Deployment.

## Tech Stack

- VitePress (aktuelle 1.x)
- Markdown als Content Source
- Vue Components fuer Interaktivitaet
- Kein Backend, kein CMS

## Projektstruktur

```text
.
|- .github/workflows/deploy.yml
|- .vitepress/
|  |- config.ts
|  |- components/
|  |  |- PromptIndex.vue
|  |  `- PromptPlayground.vue
|  `- theme/
|     |- custom.css
|     `- index.ts
|- guide/how-to-add-prompt.md
|- prompts/
|  |- agents/master-dev-agent.md
|  |- security/threat-model-lite.md
|  |- audit-codebase-health.md
|  |- architecture-migration-plan.md
|  |- performance-bottleneck-hunt.md
|  |- refactoring-module-cut.md
|  `- index.md
|- index.md
`- package.json
```

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output liegt in `.vitepress/dist`.

## Erweiterung

Neue Prompts werden als `.md` unter `prompts/` angelegt.
Sidebar und Index erkennen neue Kategorien und Eintraege automatisch ueber Frontmatter.
