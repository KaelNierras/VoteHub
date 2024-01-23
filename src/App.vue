<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router';
import { computed } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const route = useRoute();
const showSidebar = computed(() => route.name !== 'Login');
</script>

<template>
  <div class="main"> 
    <Sidebar v-if="showSidebar" />
    <div :class="{ 'router': showSidebar }" style="width: 100vw;">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
}
</style>