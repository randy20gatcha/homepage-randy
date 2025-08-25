<template>
  <v-container class="py-10" fluid>
    <Header
      title="Design and Engineering"
      description="Our team of designers and engineers works closely to turn your ideas into reality. From concept to completion, we create custom solutions with creativity, precision, and honesty"
    />

     <v-card
       class="mx-auto"
       color="surface-variant"
       :image="designEngineering"
       width="60vw"
       height="50vh"
     >
       <ContactBtn />
     </v-card>
  </v-container>
</template>

<script setup lang="ts">
import designEngineering from "../assets/design_engineering.jpg";
import ContactBtn from "../views/components/ContactBtn.vue";
import Header from "./components/Header.vue";
</script>
