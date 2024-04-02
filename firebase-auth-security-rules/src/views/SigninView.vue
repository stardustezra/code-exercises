<template>
  <SigninForm v-if="!user" />
  <button @click="onSignOut()" v-else>Sign Out</button>
</template>

<script setup>
import SigninForm from "@/components/SigninForm.vue";
import { ref } from "vue";
import { stateChange, onSignOut } from "@/services/AuthService";

const user = ref(null);

stateChange((userData) => {
  user.value = userData;
});
</script>

<style lang="scss" scoped></style>
