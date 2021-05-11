<template>
  <div class="app-main-layout">
    <Navbar />
    <SideNav />

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";

export default {
  name: "MainLayout",
  components: {
    SideNav,
    Navbar,
  },
};
</script>
