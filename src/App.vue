<template>
  <v-app>
   <Header />
   <v-main>
    <DefaultLayout />
   </v-main>
   <Footer />
  </v-app>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import Footer from "./components/Footer.vue";
// Script
</script>
