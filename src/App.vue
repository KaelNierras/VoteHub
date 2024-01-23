<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router';
import { computed } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const route = useRoute();
const showSidebar = computed(() => route.name !== 'Login');
</script>

<template>
  <div>
    <Sidebar v-if="showSidebar" />
    <div :class="{ 'router': showSidebar }">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>