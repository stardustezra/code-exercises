<script setup>
import { ref, computed, onMounted } from "vue"; // Importer de nødvendige funktioner fra Vue
import Opgave2 from "./Opgave2.vue";
import ShowList from "./ShowList.vue";

// Model
const textAreaContent = ref("");
const previousInputs = ref([]);
const storedItems = ref([]);
const showModal = ref(false);

// ViewModel
const clickButton = () => {
  // Funktion til at håndtere klik på Send-knappen
  previousInputs.value.push(textAreaContent.value);
  textAreaContent.value = "";
};

// Data og metoder til at håndtere en liste af elementer
const newItem = ref("");
const items = ref([]);
const totalItems = computed(() => {
  return items.value.length;
});

const addItem = () => {
  items.value.push(newItem.value);
  newItem.value = "";
  localStorage.setItem("items", JSON.stringify(items.value));
  localStorage;
};

const removeItem = (index) => {
  items.value.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items.value));
};

// Indlæs elementer fra localStorage ved komponentens montering
onMounted(() => {
  items.value = JSON.parse(localStorage.getItem("items")) || [];
});

const openModal = () => {
  showModal.value = true;
  storedItems.value = JSON.parse(localStorage.getItem("items")) || [];
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div>
    <textarea v-model="newItem">Enter text</textarea>
    <!-- Tekstområde til indtastning af tekst -->
    <button @click="addItem">Send</button>
    <!-- Knappen til at sende indtastningen -->
    <button @click="openModal">Open Modal</button>
  </div>

  <div class="modal-mask" v-if="showModal">
    <div class="modal-content">
      <h2>Stored Data</h2>
      <ul>
        <li v-for="(item, index) in storedItems" :key="index">{{ item }}</li>
      </ul>
      <button @click="closeModal">Close Modal</button>
    </div>
  </div>

  <ShowList />
</template>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
