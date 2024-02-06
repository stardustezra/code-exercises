<script setup>
import { ref } from "vue";

// Model
const textAreaContent = ref("");
const previousInputs = ref([]);

// ViewModel
const clickButton = () => {
  previousInputs.value.push(textAreaContent.value);
  textAreaContent.value = ""; // Clear the textarea after sending
};
</script>

<template>
  <div>
    <textarea v-model="textAreaContent">Enter text</textarea>
    <button @click="clickButton">Send</button>
  </div>
  <ul>
    <li v-for="input in previousInputs" :key="input">{{ input }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
