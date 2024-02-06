<script setup>
import { ref } from "vue";

//Model
const isClicked = ref(false);

//ViewModel
const clickButton = () => {
  isClicked.value = true;
};
</script>

<template>
  <div>
    <h1>Inde i mit template component</h1>
    {{ 4 > 5 ? "større end" : "mindre end" }}
    <hr />
    <p v-bind:class="{ active: isClicked }">Skift state hvis click</p>
    <button v-on:click="clickButton">Click me</button>
    {{ isClicked && "Nu har du klikket" }}
    <hr />
    <p v-if="isClicked">Nu har du klikket</p>
    <p v-else-if="!isClicked">Detter er en true stats 10hif9z</p>
    <p v-else>Denner er hard mode</p>
  </div>
</template>

<style lang="scss" scoped>
.active {
  background-color: lime;
}
</style>
