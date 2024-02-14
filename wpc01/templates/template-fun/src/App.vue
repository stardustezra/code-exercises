<template>
  <div>
    <h1>Hej</h1>
    <hr />
    <!-- Pass props to the ShowList component -->
    <ShowList :items="items" :isModalOpen="isModalOpen" />
    <hr />
    <!-- Render the Templating component -->
    <Templating />
    <hr />
  </div>
</template>

<script setup>
import ShowList from "./components/ShowList.vue";
import Templating from "./components/Templating.vue";
import { ref } from "vue";

// Define items and isModalOpen ref in App.vue
const items = ref([]);
const isModalOpen = ref(false);
</script>

<style scoped>
/* Scoped styles */
</style>
