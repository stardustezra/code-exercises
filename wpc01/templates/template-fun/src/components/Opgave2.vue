<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: Array,
});
</script>

<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>
