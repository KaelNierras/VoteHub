<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth();

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log('Successfully signed in with Google');
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
};
</script>


<template>
  <div class="main d-flex w-100">
    
    <div class="bg d-flex align-items-end">
      <div class="login d-flex flex-column align-items-center ">
        <img src="/logo with line.png" height='110' width="280">
        <div class="google" @click="signInWithGoogle" style="">
          <img src="/google icon.png" width="30" height="30">
          Sign In with Google
        </div>
        <p class="text-light">Electoral Management System. ©CS Cube 2024</p>
      </div>
    </div>
    

    <div class="side">

    </div>
  </div>

</template>

<style scoped>

.google{
  color: white; 
  border: 2px solid white; 
  padding: 10px; 
  border-radius: 20px; 
  font-size: small;
}

.google:hover{
  cursor: pointer;
}
.login{
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #2B3151;
  width: 450px;
  height: 550px;
  border-radius: 70px 70px 0px 0px;
}

.bg {
  background-image: url("backgroundYellow.jpg");
  background-size: cover; /* Adjust as needed */
}

.main{
  height: 100vh !important;
}

.side{
  width: 100vw;
  background-image: url("sideimage.jpg");
  background-size: cover; /* Adjust as needed */
}
</style>

