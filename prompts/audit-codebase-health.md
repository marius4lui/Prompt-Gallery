---
title: Codebase Health Audit
description: Analysiert Architektur, Wartbarkeit und DX-Risiken in einem Projekt.
category: Audit
use_cases:
  - Initiale technische Bestandsaufnahme
  - Vorbereitung fuer Refactoring-Roadmap
  - Engineering-Health-Check vor Release
inputs:
  - key: project_name
    label: Projektname
    placeholder: z. B. FoodyStamp
  - key: stack
    label: Tech Stack
    placeholder: z. B. React, Node.js, PostgreSQL
  - key: goal
    label: Ziel
    placeholder: z. B. Stabilitaet und Liefergeschwindigkeit steigern
prompt_template: |
  Rolle:
  Du bist ein Senior Staff Engineer und fuehrst ein strukturiertes Audit fuer {{project_name}} durch.

  Kontext:
  - Projekt: {{project_name}}
  - Stack: {{stack}}
  - Ziel: {{goal}}

  Aufgabe:
  1. Bewerte Code-Qualitaet, Architektur, Teststrategie, CI/CD und Developer Experience.
  2. Liste die 10 wichtigsten Risiken nach Impact und Wahrscheinlichkeit.
  3. Erstelle einen 30-60-90 Tage Verbesserungsplan.

  Ausgabeformat:
  - Executive Summary
  - Top Risiken (inkl. Begruendung)
  - Konkrete Massnahmen mit Aufwand (S, M, L)
  - Schnelle Wins in den naechsten 14 Tagen
---

# Codebase Health Audit

<PromptPlayground />

