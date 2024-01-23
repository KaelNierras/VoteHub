<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const auth = getAuth();

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log('Successfully signed in with Google');
    router.push('/dashboard');
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
        <p class="text-light" style="font-size: small !important; font-family: Verdana, Geneva, Tahoma, sans-serif;">Electoral Management System. ©CS Cube 2024</p>
      </div>
    </div>
    
    <div class="side">

    </div>
  </div>

</template>

<style scoped>
.google {
  margin-top: 100px;
  color: white;
  border: 2px solid white;
  padding: 10px;
  border-radius: 20px;
  font-size: small;
}

.google:hover {
  cursor: pointer;
}

.login {
  padding-top: 50px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column; /* Updated for better responsiveness */
  align-items: center; /* Center content vertically */
  background-color: #2B3151;
  width: 100%; /* Updated to full width */
  border-radius: 70px 70px 0px 0px;
  box-sizing: border-box; /* Include padding and border in the width */
}

.bg {
  background-image: url("/backgroundYellow.jpg");
  background-size: cover;
  height: 100vh;
}

.main {
  height: 100vh !important;
  display: flex; /* Updated to flex to allow side and bg to coexist */
}

.side {
  width: 100vw;
  background-image: url("/sideimage.jpg");
  background-size: cover;
}

/* Media query for small screens (max-width: 767px) */
@media screen and (max-width: 767px) {
  .bg {
    justify-content: center; /* Center content horizontally */
  }

  .login {
    width: 100%;
    padding: 20px; /* Add padding for better spacing on small screens */
    border-radius: 0; /* Remove border-radius on small screens */
  }

  .side {
    display: none;
  }
}
</style>


