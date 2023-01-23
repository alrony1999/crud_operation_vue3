<script setup>
import Navbar from "./components/Navbar.vue";
import StudentList from "./views/student/StudentList.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="max-w-7xl mx-auto">
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
