---
title: Refactoring Module Cut Plan
description: Schneidet ein ueberladenes Modul in klar getrennte Verantwortlichkeiten.
category: Refactoring
use_cases:
  - Entkoppelung stark gekoppelter Komponenten
  - Vorarbeit fuer bessere Testbarkeit
  - Reduktion technischer Schulden
inputs:
  - key: project_name
    label: Projektname
    placeholder: z. B. Booking Engine
  - key: stack
    label: Tech Stack
    placeholder: z. B. Vue, NestJS, MongoDB
  - key: module_name
    label: Modul
    placeholder: z. B. CheckoutService
prompt_template: |
  Du bist Refactoring-Spezialist.

  Erstelle fuer {{project_name}} einen Modul-Schnittplan.
  - Stack: {{stack}}
  - Betroffenes Modul: {{module_name}}

  Ausgabe:
  1. Aktuelle Schmerzpunkte und Coupling-Hotspots
  2. Zielzuschnitt (neue Module + Schnittstellen)
  3. Sequenz der Migration in kleinen sicheren Schritten
  4. Teststrategie zur Regression-Vermeidung
---

# Refactoring Module Cut Plan

<PromptPlayground />

