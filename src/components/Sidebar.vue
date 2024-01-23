<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '@/firebase'; // Adjust the path accordingly

const currentUser = ref(auth.currentUser);
const currentRoute = ref('window.location.pathname');
const currentUserID = ref(localStorage.getItem('currentUserID') || (auth.currentUser ? auth.currentUser.uid : null));
const moderatorRole = ref(null);

const setActiveRoute = (route) => {
  currentRoute.value = route;
};

const getModeratorRole = async () => {
  try {
    const moderatorCollection = collection(db, 'moderator');
    const q = query(moderatorCollection, where('id', '==', currentUserID.value));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        moderatorRole.value = doc.data().role;
      });
    } else {
      console.log('No matching document found.');
    }
  } catch (error) {
    console.error('Error getting moderator role:', error);
  }
};

onMounted(async () => {
  // Update the initial route on component mount
  setActiveRoute(window.location.pathname);

  // Check if there's a user ID in local storage and update currentUserID
  const storedUserID = localStorage.getItem('currentUserID');
  if (storedUserID) {
    currentUserID.value = storedUserID;
  }

  // Listen for changes in authentication state
  const unsubscribe = auth.onAuthStateChanged((user) => {
    currentUser.value = user;

    // If the user is authenticated, update the currentUserID ref
    if (user) {
      currentUserID.value = user.uid;
      localStorage.setItem('currentUserID', user.uid);
    }

    getModeratorRole();
  });

  return () => {
    // Unsubscribe from onAuthStateChanged to avoid memory leaks
    unsubscribe();
  };
});

const router = useRouter();

const signOut = async () => {
  try {
    await auth.signOut();
    // Clear the stored user ID on sign out
    localStorage.removeItem('currentUserID');
    router.push('/');
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};
</script>


<style scoped>
.title {
    padding-left: 20px;
    font-size:x-small;
    padding-bottom: 5px;
    margin-bottom: 0px;
}

.nav-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100% !important;
    padding-left: 20px !important;
    border-radius: 4px;
    border: 0px solid white !important;
}

.icons {
    height: 20px;
    margin-right: 10px;
}

.nav-item {
    width: 100% !important;
}

.profile-img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.name {
    font-size:small;
    margin-bottom: 0px;
}

.position {
    font-size: x-small;
}

.logo-img {
    justify-content: start !important;
    padding-top: 10px;
}

.topSection {
    background-color: #1f2337;
}

.profile{
    padding: 10px;
    margin-top: 10px !important;
    background-color: #37404e;
    color: white;
    margin-bottom: 0px !important;
}

/* Media query for small screens (max-width: 767px) */
@media screen and (max-width: 767px) {
    .bg-container{
        width: 80px;
    }

    .details, .nav-name{
        display: none !important;
    }
    
    .title{
        display: none !important;
        padding-left: 0px !important;
    }

    .logo-img{
        display: none !important;
    }
}

.nav-link.active {
  background-color: #37404e; /* Change the background color as needed */
  border-radius: 4px;
}

.footer{
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
}


</style>

<template>
    <div class="col-auto col-md-3 col-xl-2" style="background-color: #2B3151;">
      <div class="bg-container d-flex flex-column align-items-center align-items-sm-start p-0 text-white min-vh-100">
  
        <div class="topSection w-100 mb-4">
          <a href="/dashboard" class="d-flex align-items-center text-white text-decoration-none logo-img w-100">
            <img src="/logo.png" width="200">
          </a>
  
          <div class="profile d-flex flex-row justify-content-start align-items-center mb-2 w-100">
            <img src="/profile.png" alt="hugenerd" width="30" height="30" class="rounded-circle profile-img">
            <div class="details d-flex align-items-start flex-column">
              <p class="name">
                {{ currentUser?.displayName || currentUser?.email }}
              </p>
              <p class="position m-0">
               {{ moderatorRole }}
              </p>
            </div>
            <hr>
          </div>
        </div>
  
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100 p-2 footer" id="menu">
  
          <!-- Report Section -->
          <p class="title">REPORTS</p>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link align-middle px-0" :class="{ active: currentRoute === '/dashboard' }" @click="setActiveRoute('/dashboard')">
              <img src="/dashboard.png" class="icons">
              <span class="ms-1 nav-name d-sm-inline text-light">Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/votes" class="nav-link align-middle px-0" :class="{ active: currentRoute === '/votes' }" @click="setActiveRoute('/votes')">
              <img src="/manual-voting.png" class="icons">
              <span class="ms-1 nav-name d-sm-inline text-light">Event</span>
            </router-link>
          </li>
  
          <div class="space"></div>
  
          <!-- Manage Section -->
          <p class="title mt-4">MANAGE</p>
          <li class="nav-item">
            <router-link to="#" class="nav-link align-middle px-0" :class="{ active: currentRoute === '#' }" @click="setActiveRoute('#')">
              <img src="/people.png" class="icons">
              <span class="ms-1 nav-name d-sm-inline text-light">Voters</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link align-middle px-0" :class="{ active: currentRoute === '#' }" @click="setActiveRoute('#')">
              <img src="/hierarchy-structure.png" class="icons">
              <span class="ms-1 nav-name d-sm-inline text-light">Position</span>
            </router-link>
          </li>
  
          <li class="nav-item">
            <router-link to="#" class="nav-link align-middle px-0" :class="{ active: currentRoute === '#' }" @click="setActiveRoute('#')">
              <img src="/selected.png" class="icons">
              <span class="ms-1 nav-name d-sm-inline text-light">Candidate</span>
            </router-link>
          </li>
  
          <p class="title mt-4"></p>
          <li class="nav-item">
            <router-link to="/" class="nav-link align-middle px-0" @click="signOut()">
              <img src="/logout.png" class="icons">
              <span class="ms-1 nav-name d-sm-inline text-light">Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  