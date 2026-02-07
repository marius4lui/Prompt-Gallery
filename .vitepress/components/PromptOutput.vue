<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
  buttonLabel: string;
  copiedLabel: string;
  copied: boolean;
  tone?: "default" | "subtle";
}>();

const emit = defineEmits<{
  copy: [];
}>();
</script>

<template>
  <section class="pg-panel">
    <h2 class="pg-title">{{ title }}</h2>
    <pre :class="['pg-code', tone === 'subtle' ? 'pg-code-subtle' : '']"><code>{{ content }}</code></pre>
    <button
      type="button"
      :class="['pg-button', tone === 'subtle' ? 'pg-button-ghost' : '']"
      @click="emit('copy')"
    >
      {{ copied ? copiedLabel : buttonLabel }}
    </button>
  </section>
</template>
