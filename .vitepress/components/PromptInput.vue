<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  placeholder?: string;
}>();

const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="pg-field">
    <label :for="id" class="pg-label">{{ label }}</label>
    <input :id="id" v-model="model" :placeholder="placeholder || ''" class="pg-input" />
  </div>
</template>
