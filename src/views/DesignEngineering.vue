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
       <template v-slot:actions>
         <div class="d-flex justify-center w-100">
           <v-btn
             class="text-white"
             prepend-icon="mdi-phone"
             color="amber darken-3"
             variant="flat"
             rounded
             style="bottom: -100px;"
           >
             Contact us now
           </v-btn>
         </div>
       </template>
     </v-card>
  </v-container>
</template>

<script setup lang="ts">
import designEngineering from "../assets/design_engineering.jpg"
import Header from "./components/Header.vue";
</script>
