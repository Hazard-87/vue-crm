<template>
  <div class="app-main-layout">
    <Navbar @click-menu="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <AddButton />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AddButton from "../components/AddButton";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
  }),

  components: {
    Sidebar,
    Navbar,
    AddButton,
  },
};
</script>
