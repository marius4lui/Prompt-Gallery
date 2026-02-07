<script setup lang="ts">
defineProps<{
  description?: string;
  useCases: string[];
}>();
</script>

<template>
  <section class="pg-panel">
    <h2 class="pg-title">Erklaerung</h2>
    <p class="pg-text">{{ description }}</p>
    <ul class="pg-list">
      <li v-for="item in useCases" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
