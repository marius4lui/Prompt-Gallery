<script setup lang="ts">
import { computed, ref } from "vue";

type PromptMeta = {
  title?: string;
  description?: string;
  category?: string;
  use_cases?: string[];
};

type PromptEntry = {
  title: string;
  description: string;
  category: string;
  link: string;
};

const selectedCategory = ref("Alle");
const query = ref("");

const files = import.meta.glob("/prompts/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
}) as Record<string, string>;

function extractFrontmatter(raw: string): PromptMeta {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const fm = match[1];
  const getValue = (key: string) =>
    fm.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim().replace(/^["']|["']$/g, "");

  return {
    title: getValue("title"),
    description: getValue("description"),
    category: getValue("category")
  };
}

const entries = computed<PromptEntry[]>(() =>
  Object.entries(files)
    .map(([filePath, raw]) => {
      const fm = extractFrontmatter(raw);
      const link = filePath.replace(/\/index\.md$/, "/").replace(/\.md$/, "");
      return {
        title: fm.title ?? "Unbenannter Prompt",
        description: fm.description ?? "",
        category: fm.category ?? "Unkategorisiert",
        link
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title, "de"))
);

const categories = computed(() => {
  const unique = new Set(entries.value.map((entry) => entry.category));
  return ["Alle", ...Array.from(unique).sort((a, b) => a.localeCompare(b, "de"))];
});

const filteredEntries = computed(() =>
  entries.value.filter((entry) => {
    const matchesCategory =
      selectedCategory.value === "Alle" || entry.category === selectedCategory.value;
    const lowered = query.value.trim().toLowerCase();
    const matchesQuery =
      lowered.length === 0 ||
      entry.title.toLowerCase().includes(lowered) ||
      entry.description.toLowerCase().includes(lowered);
    return matchesCategory && matchesQuery;
  })
);
</script>

<template>
  <section class="pg-index">
    <h2>Prompt Index</h2>
    <p>Filtere nach Kategorie und suche direkt in Titel oder Beschreibung.</p>
    <div class="pg-index-toolbar">
      <select v-model="selectedCategory" class="pg-select">
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <input
        v-model="query"
        type="search"
        placeholder="Prompt suchen ..."
        class="pg-search"
      />
    </div>

    <ul v-if="filteredEntries.length > 0" class="pg-index-list">
      <li v-for="entry in filteredEntries" :key="entry.link" class="pg-index-item">
        <a :href="entry.link">{{ entry.title }}</a>
        <div class="pg-index-meta">{{ entry.category }}</div>
        <div>{{ entry.description }}</div>
      </li>
    </ul>
    <p v-else class="pg-text">Keine Prompts gefunden. Passe Filter oder Suche an.</p>
  </section>
</template>
