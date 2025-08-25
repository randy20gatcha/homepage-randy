<template>
  <v-container class="py-10" fluid>
     <Header
       title="Builds and Fit outs"
       description="Our experienced team handles builds and fit-outs for any vehicle make or model. From accessibility conversions to emergency ambulances, law enforcement vehicles, and specialised patient transport, we apply our expertise to every project. We’re here to turn your vision into a fully functional, well-equipped reality."
     />

     <v-card
       class="mx-auto"
       color="surface-variant"
       :image="buildsFitouts"
       width="60vw"
       height="50vh"
     >
       <ContactBtn />
     </v-card>
  </v-container>
</template>

<script setup lang="ts">
import buildsFitouts from "../assets/fit_out.jpg";
import ContactBtn from "../views/components/ContactBtn.vue";
import Header from "./components/Header.vue";
</script>