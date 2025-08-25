<template>
  <v-container class="py-10" fluid>
     <Header
       title="Manufacturing"
       description="With advanced machinery like CNC routers, plasma cutters, press brakes, and MIG/TIG welding equipment, we deliver precise, customized parts for your vehicle. We transform concepts into reality through quality manufacturing."
     />

     <v-card
       class="mx-auto"
       color="surface-variant"
       :image="manufacturing"
       width="60vw"
       height="50vh"
     >
       <ContactBtn />
     </v-card>
  </v-container>
</template>

<script setup lang="ts">
import manufacturing from "../assets/manufacturing.jpg"
import ContactBtn from "../views/components/ContactBtn.vue";
import Header from "./components/Header.vue";
</script>

<style scoped>
.contact-btn {
  transition: transform 0.25s ease; /* smooth animation */
}

.contact-btn:hover {
  transform: scale(1.1); /* enlarge by 10% */
}
</style>
