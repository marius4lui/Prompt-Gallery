import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";

type PromptMeta = {
  title: string;
  category: string;
};

const categoryOrder = [
  "Audit",
  "Architektur",
  "Refactoring",
  "Security",
  "Performance",
  "Agents / Master Prompts"
];

function readPromptFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...readPromptFiles(full));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(full);
    }
  }

  return files;
}

function parseFrontmatter(raw: string): PromptMeta | null {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const titleMatch = match[1].match(/^title:\s*(.+)$/m);
  const categoryMatch = match[1].match(/^category:\s*(.+)$/m);
  if (!titleMatch || !categoryMatch) return null;

  return {
    title: titleMatch[1].trim().replace(/^["']|["']$/g, ""),
    category: categoryMatch[1].trim().replace(/^["']|["']$/g, "")
  };
}

function buildPromptSidebar() {
  const promptsDir = path.resolve(process.cwd(), "prompts");
  if (!fs.existsSync(promptsDir)) return [];

  const grouped = new Map<string, Array<{ text: string; link: string }>>();

  for (const file of readPromptFiles(promptsDir)) {
    const raw = fs.readFileSync(file, "utf8");
    const meta = parseFrontmatter(raw);
    if (!meta) continue;

    const relative = path.relative(process.cwd(), file).replace(/\\/g, "/");
    const link = "/" + relative.replace(/\.md$/, "");
    const group = grouped.get(meta.category) ?? [];
    group.push({ text: meta.title, link });
    grouped.set(meta.category, group);
  }

  const sortedCategories = [...grouped.keys()].sort((a, b) => {
    const ai = categoryOrder.indexOf(a);
    const bi = categoryOrder.indexOf(b);
    const aPos = ai === -1 ? Number.MAX_SAFE_INTEGER : ai;
    const bPos = bi === -1 ? Number.MAX_SAFE_INTEGER : bi;
    if (aPos !== bPos) return aPos - bPos;
    return a.localeCompare(b, "de");
  });

  return sortedCategories.map((category) => ({
    text: category,
    collapsed: false,
    items: (grouped.get(category) ?? []).sort((a, b) =>
      a.text.localeCompare(b.text, "de")
    )
  }));
}

export default defineConfig({
  lang: "de-DE",
  title: "Prompt Gallery",
  description: "Interaktive, erweiterbare Prompt Gallery mit VitePress.",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Start", link: "/" },
      { text: "Prompt Index", link: "/prompts/" },
      { text: "How to Add", link: "/guide/how-to-add-prompt" }
    ],
    sidebar: [
      {
        text: "Prompt Gallery",
        items: [
          { text: "Prompt Index", link: "/prompts/" },
          { text: "How to Add a Prompt", link: "/guide/how-to-add-prompt" }
        ]
      },
      ...buildPromptSidebar()
    ],
    search: {
      provider: "local"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/your-org/prompt-gallery" }]
  }
});
