<template>
  <div>
    <h1>Welcome to the Dashboard, {{ currentUser.displayName || currentUser.email }}!</h1>
    <p>This is a simple Vue dashboard example.</p>

    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase';
import { useRouter } from 'vue-router';

const router = useRouter();

const currentUser = ref(auth.currentUser);

const signOut = async () => {
  try {
    await auth.signOut();
    router.push('/');
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};
</script>

<style scoped>
/* Add your styles for the dashboard component here */
</style>
