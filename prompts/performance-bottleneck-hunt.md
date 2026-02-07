---
title: Performance Bottleneck Hunt
description: Identifiziert und priorisiert Laufzeit-Bottlenecks fuer Web-Apps.
category: Performance
use_cases:
  - Langsame Seiten-Interaktion
  - Hohe API-Latenz
  - Vorbereitungen fuer Skalierung
inputs:
  - key: project_name
    label: Projektname
    placeholder: z. B. Analytics Dashboard
  - key: stack
    label: Tech Stack
    placeholder: z. B. Vite, Vue, Fastify
  - key: slos
    label: SLOs
    placeholder: z. B. P95 < 500ms
prompt_template: |
  Du bist Performance Engineer.

  Untersuche {{project_name}} auf Bottlenecks.
  - Stack: {{stack}}
  - Ziel-SLOs: {{slos}}

  Liefere:
  1. Vermutete Hotspots nach Frontend, Backend, Datenbank
  2. Messplan mit konkreten Metriken und Tools
  3. Priorisierte Optimierungen mit Aufwand/Nutzen
  4. Rollout- und Monitoring-Plan
---

# Performance Bottleneck Hunt

<PromptPlayground />

