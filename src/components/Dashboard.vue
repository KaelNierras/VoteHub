<template>
    <!-- Sign-out button -->
    <button @click="signOut">Sign Out</button>
</template>

<script setup>
import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const auth = getAuth();

const router = useRouter();

const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    console.log('User signed out successfully');
    // Optionally, you can navigate to another page after sign-out
    router.push('/');
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};
</script>
