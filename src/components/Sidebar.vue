<style scoped>
.title {
    padding-left: 20px;
    font-size: x-small;
}

.nav-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100% !important;
    padding-left: 20px !important;
    border-radius: 4px;
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
    margin-bottom: 10px;
    margin-right: 10px;
}

.name {
    font-size: smaller;
    margin-bottom: 0px;
}

.position {
    font-size: x-small;
}

.logo-img {
    justify-content: center !important;
    padding-top: 20px;
    padding-bottom: 20px;

}

.topSection {
    background-color: #1f2337;
}
</style>

<template>
    <div class="col-auto col-md-3 col-xl-2 " style="background-color: #2B3151;">
        <div class="d-flex flex-column align-items-center align-items-sm-start p-0 text-white min-vh-100">

            <div class="topSection w-100 mb-4 p-2">
                <a href="/" class="d-flex align-items-center text-white text-decoration-none logo-img w-100">
                    <img src="/logo.png" width="150">
                </a>

                <div class="profile d-flex flex-row justify-content-center align-items-center mb-4 w-100">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30"
                        class="rounded-circle profile-img">

                    <div class="details d-flex align-items-start flex-column">
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

            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100 p-2" id="menu">

                <!-- Report Section -->
                <p class="title">REPORTS</p>
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0 active">
                        <img src="/dashboard.png" class="icons">
                        <span class="ms-1 d-none d-sm-inline text-light">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0">
                        <img src="/manual-voting.png" class="icons">
                        <span class="ms-1 d-none d-sm-inline text-light">Votes</span>
                    </a>
                </li>

                <div class="space">

                </div>

                <!-- Manage Section -->
                <p class="title mt-4">MANAGE</p>
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0">
                        <img src="/people.png" class="icons">
                        <span class="ms-1 d-none d-sm-inline text-light">Voters</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0">
                        <img src="/hierarchy-structure.png" class="icons">
                        <span class="ms-1 d-none d-sm-inline text-light">Position</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0">
                        <img src="/selected.png" class="icons">
                        <span class="ms-1 d-none d-sm-inline text-light">Candidate</span>
                    </a>
                </li>


            </ul>

        </div>
    </div>
</template>