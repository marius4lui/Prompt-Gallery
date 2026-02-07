# How to Add a Prompt

<div class="pg-page">
<section class="pg-hero">
<p class="pg-kicker">Contributing</p>
<p>Neue Prompts brauchen nur eine neue Markdown-Datei unter <code>prompts/</code>. Keine Code-Anpassung am Rendering ist notwendig.</p>
</section>

## 1) Datei anlegen

Lege eine Datei an, z. B. `prompts/mein-neuer-prompt.md`.

## 2) Frontmatter ausfuellen

```yaml
---
title: Mein Prompt
description: Kurze Beschreibung
category: Audit
use_cases:
  - Fall 1
  - Fall 2
inputs:
  - key: project_name
    label: Projektname
    placeholder: z. B. FoodyStamp
  - key: stack
    label: Tech Stack
    placeholder: z. B. Flutter, Supabase
prompt_template: |
  Rolle:
  Du bist ...
  Projekt: {{project_name}}
  Stack: {{stack}}
---
```

## 3) Inhalt

Unter dem Titel reicht in der Regel:

```md
# Mein Prompt

<PromptPlayground />
```

## 4) Fertig

- Der Prompt erscheint automatisch im `Prompt Index`.
- Die Sidebar gruppiert automatisch nach `category`.
- Platzhalter aus `prompt_template` werden im Playground mit den Formularwerten ersetzt.

## Contributing

Diese Gallery lebt von guten Beitraegen. Wenn du neue Prompts oder Verbesserungen einbringst, hilfst du direkt dem ganzen Team.

### Beitrag einreichen

1. Branch erstellen, z. B. `feat/prompt-security-review`.
2. Neue oder angepasste Prompt-Datei unter `prompts/` committen.
3. Lokal mit `pnpm run build` pruefen.
4. Pull Request mit kurzer Begruendung und Use Cases erstellen.

### PR Checkliste

- Frontmatter ist vollstaendig (`title`, `description`, `category`, `use_cases`, `inputs`, `prompt_template`).
- Platzhalter im `prompt_template` passen zu `inputs[].key`.
- Prompt ist klar, umsetzbar und ohne irrelevante Redundanz.
- Kategorie ist korrekt, damit Sidebar und Filter sinnvoll bleiben.

</div>
