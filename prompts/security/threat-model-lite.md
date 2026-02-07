---
title: Threat Model Lite
description: Leichtgewichtiges Security-Template fuer Features und Services.
category: Security
use_cases:
  - Feature-Planung vor Umsetzung
  - Security-Review im Sprint
  - Basis fuer Penetration-Test-Briefing
inputs:
  - key: project_name
    label: Projektname
    placeholder: z. B. Payment Hub
  - key: stack
    label: Tech Stack
    placeholder: z. B. Next.js, Go, Redis
  - key: feature
    label: Feature
    placeholder: z. B. Passwort-Reset Flow
prompt_template: |
  Du bist Security Engineer.

  Fuehre ein Threat Modeling fuer {{project_name}} durch.
  - Stack: {{stack}}
  - Feature: {{feature}}

  Bitte liefere:
  1. Asset-Liste (Daten, Systeme, Schnittstellen)
  2. Angriffsvektoren nach STRIDE
  3. Konkrete Gegenmassnahmen mit Prioritaet
  4. Testfaelle fuer Security QA
---

# Threat Model Lite

<PromptPlayground />

