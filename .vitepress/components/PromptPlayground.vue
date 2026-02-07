<script setup lang="ts">
import { computed, reactive, watchEffect } from "vue";
import { useData } from "vitepress";
import PromptInput from "./PromptInput.vue";
import PromptMeta from "./PromptMeta.vue";
import PromptOutput from "./PromptOutput.vue";

type PromptInput = {
  key: string;
  label: string;
  placeholder?: string;
};

type PromptFrontmatter = {
  description?: string;
  use_cases?: string[];
  inputs?: PromptInput[];
  prompt_template?: string;
};

const { frontmatter } = useData<PromptFrontmatter>();

const values = reactive<Record<string, string>>({});
const copied = reactive({ generated: false, template: false });

const template = computed(() => frontmatter.value.prompt_template?.trim() ?? "");
const promptInputs = computed(() => frontmatter.value.inputs ?? []);
const useCases = computed(() => frontmatter.value.use_cases ?? []);

watchEffect(() => {
  for (const input of promptInputs.value) {
    if (!(input.key in values)) values[input.key] = "";
  }
});

const generatedPrompt = computed(() => {
  let output = template.value;
  for (const input of promptInputs.value) {
    const replacement =
      values[input.key]?.trim() || `{{${input.key}}}`;
    output = output.replaceAll(`{{${input.key}}}`, replacement);
  }
  return output;
});

function fallbackCopy(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  fallbackCopy(text);
}

async function copyGeneratedPrompt() {
  await copyText(generatedPrompt.value);
  copied.generated = true;
  window.setTimeout(() => {
    copied.generated = false;
  }, 1800);
}

async function copyTemplateAsMarkdown() {
  await copyText(template.value);
  copied.template = true;
  window.setTimeout(() => {
    copied.template = false;
  }, 1800);
}
</script>

<template>
  <section class="pg-layout">
    <PromptMeta :description="frontmatter.description" :use-cases="useCases" />

    <section class="pg-panel pg-input-panel">
      <h2 class="pg-title">Input</h2>
      <p class="pg-text">Fuelle die Felder aus. Platzhalter werden live ersetzt.</p>
      <PromptInput
        v-for="input in promptInputs"
        :id="input.key"
        :key="input.key"
        v-model="values[input.key]"
        :label="input.label"
        :placeholder="input.placeholder"
      />
    </section>

    <div class="pg-stack">
      <PromptOutput
        title="Original Prompt"
        :content="template"
        button-label="Original als Markdown kopieren"
        copied-label="Markdown kopiert"
        :copied="copied.template"
        tone="subtle"
        @copy="copyTemplateAsMarkdown"
      />
      <PromptOutput
        title="Ergebnis"
        :content="generatedPrompt"
        button-label="Finalen Prompt kopieren"
        copied-label="Prompt kopiert"
        :copied="copied.generated"
        @copy="copyGeneratedPrompt"
      />
    </div>
  </section>
</template>
