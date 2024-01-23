<template>
  <div>
    <div class="header d-flex flex-row justify-content-between">
      <h1>Welcome to <b>VotePage</b></h1>
      <button class="btn btn-primary" @click="handleButtonClick">
        <span class="material-symbols-outlined">
          add
        </span>
      </button>
    </div>
    <hr>
    <p>Electoral Management System for ease and automation developed by the CS Students.</p>
  </div>
  <p class="title h4 ">Events</p>
  <div class="cards-container">
    <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="card-row">
      <div v-for="(column, columnIndex) in row" :key="columnIndex" class="card bg-light text-dark">
        <div class="card-header">
          {{ column.header }}
        </div>
        <div class="card-body">
          <img :src="column.image" alt="Card Image" class="card-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const cardList = ref([
  { header: "CS Cude Election", image: "profile.png" },
  { header: "Robotic Org Election", image: "profile.png" },
  { header: "UCSS Election", image: "profile.png" },
  // Add more cards as needed
]);

const rows = computed(() => {
  const maxCardsPerRow = 10;
  const result = [];
  for (let i = 0; i < cardList.value.length; i += maxCardsPerRow) {
    result.push(cardList.value.slice(i, i + maxCardsPerRow));
  }
  return result;
});
</script>

<style scoped>
.card-body img {
  width: 200px;
  height: 130px;
  object-fit: contain;
}
.cards-container {
  height: calc(100vh - 230px); /* Adjust as needed */
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.247);

}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgba(128, 128, 128, 0.251);
  width: 200px;
  height: 200px;
  margin: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: green;
  padding: 10px;
  color: white;
  font-weight: bold;
}

.card-body {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-body img {
  max-width: 100%;
  max-height: 100%;
}

.btn {
  height: 50px;
  width: 50px;
  line-height: 0px !important;
  background-color: green;
  border: none;
}

.card-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
