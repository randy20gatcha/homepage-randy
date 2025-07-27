<template>
  <v-container id="services-overview" class="py-10" fluid>
    <h2 class="text-h4 font-weight-bold mb-8 text-center">
      Our Services
    </h2>

    <v-row dense>
      <v-col
        v-for="(service, index) in SERVICES_OVERVIEW"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="h-100" link>
          <v-img
            :src="service.image"
            height="200"
            cover
          ></v-img>

          <v-card-title>{{ service.title }}</v-card-title>
          <v-card-text>{{ service.description }}</v-card-text>

          <v-card-actions>
            <v-btn color="primary" variant="text">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { SERVICES_OVERVIEW } from "../data/services-overview";
</script>
