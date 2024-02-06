<script setup>
import { ref } from "vue";

//Model
const textAreaContent = ref("");
const displayedContent = ref("");

//ViewModel
const clickButton = () => {
  displayedContent.value = textAreaContent.value;
};
</script>

<template>
  <textarea v-model="textAreaContent">Enter text</textarea>
  <button @click="clickButton">Send</button>
  <div>{{ displayedContent }}</div>
</template>

<style lang="scss" scoped></style>
