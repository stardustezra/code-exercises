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

const removeInput = (index) => {
  previousInputs.value.splice(index, 1);
};
</script>

<template>
  <div>
    <textarea v-model="textAreaContent">Enter text</textarea>
    <button @click="clickButton">Send</button>
  </div>
  <ul>
    <li v-for="(input, index) in previousInputs" :key="index">
      {{ input }}
      <button @click="removeInput(index)">Remove</button>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
