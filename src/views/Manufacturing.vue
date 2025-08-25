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
import manufacturing from "../assets/manufacturing.jpg"
import Header from "./components/Header.vue";
</script>