---
title: Architektur Migrationsplan
description: Erstellt eine schrittweise Zielarchitektur inklusive Migrationsphasen.
category: Architektur
use_cases:
  - Monolith zu modularer Architektur
  - Legacy-Modernisierung
  - Team-Skalierung vorbereiten
inputs:
  - key: project_name
    label: Projektname
    placeholder: z. B. Internal CRM
  - key: stack
    label: Aktueller Stack
    placeholder: z. B. PHP Monolith, MySQL
  - key: target
    label: Zielbild
    placeholder: z. B. modulare Services mit klaren Boundaries
prompt_template: |
  Du bist Enterprise-Architekt.

  Erstelle fuer {{project_name}} einen pragmatischen Migrationsplan.
  - Ist-Stack: {{stack}}
  - Zielbild: {{target}}

  Erwarte:
  1. Zielarchitektur mit klaren Komponenten und Verantwortlichkeiten
  2. Migrationsphasen mit Reihenfolge und Risiken
  3. Definition of Done pro Phase
  4. Technische und organisatorische Guardrails
---

# Architektur Migrationsplan

<PromptPlayground />

