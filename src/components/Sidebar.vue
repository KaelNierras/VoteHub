<script setup>
import { ref, onMounted } from 'vue';

const currentRoute = ref('window.location.pathname');

const setActiveRoute = (route) => {
  currentRoute.value = route;
};

onMounted(() => {
  // Update the initial route on component mount
  setActiveRoute(window.location.pathname);
});
</script>


<style scoped>
.title {
    padding-left: 20px;
    font-size: small;
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


</style>

<template>
    <div class="col-auto col-md-3 col-xl-2 " style="background-color: #2B3151;">
        <div class="bg-container d-flex flex-column align-items-center align-items-sm-start p-0 text-white min-vh-100">

            <div class="topSection w-100 mb-4">
                <a href="/dashboard" class="d-flex align-items-center text-white text-decoration-none logo-img w-100" >
                    <img src="/logo.png" width="150">
                </a>

                <div class="profile d-flex flex-row justify-content-start align-items-center mb-2 w-100">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30"
                        class="rounded-circle profile-img">

                    <div class="details  d-flex align-items-start flex-column ">
                        <p class="name">
                            Kyle Anthony Nierras
                        </p>
                        <p class="position m-0">
                            VP Marketing
                        </p>
                    </div>

                    <hr>

                </div>

            </div>

            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center w-100 p-2" id="menu">

                <!-- Report Section -->
                <p class="title">REPORTS</p>
                <li class="nav-item">
                    <a href="/dashboard" class="nav-link align-middle px-0"  :class="{ active: currentRoute === '/dashboard' }" @click="setActiveRoute('/dashboard')">
                        <img src="/dashboard.png" class="icons">
                        <span class="ms-1 nav-name d-sm-inline text-light">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/votes" class="nav-link align-middle px-0" :class="{ active: currentRoute === '/votes' }" @click="setActiveRoute('/votes')">
                        <img src="/manual-voting.png" class="icons">
                        <span class="ms-1 nav-name d-sm-inline text-light">Votes</span>
                    </a>
                </li>

                <div class="space">

                </div>

                <!-- Manage Section -->
                <p class="title mt-4">MANAGE</p>
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0" :class="{ active: currentRoute === '#' }" @click="setActiveRoute('#')">
                        <img src="/people.png" class="icons">
                        <span class="ms-1 nav-name d-sm-inline text-light">Voters</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0" :class="{ active: currentRoute === '#' }" @click="setActiveRoute('#')">
                        <img src="/hierarchy-structure.png" class="icons" >
                        <span class="ms-1 nav-name d-sm-inline text-light">Position</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0" :class="{ active: currentRoute === '#' }" @click="setActiveRoute('#')">
                        <img src="/selected.png" class="icons">
                        <span class="ms-1 nav-name d-sm-inline text-light">Candidate</span>
                    </a>
                </li>


            </ul>

        </div>
    </div>
</template>