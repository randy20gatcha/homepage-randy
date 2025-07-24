<template>
  <v-container id="services-overview" class="py-10" fluid>
    <h2 class="text-h4 text-center mb-8">Our Services</h2>

    <v-row dense>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="h-100">
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
const services = [
  {
    title: "Drilling & Blasting",
    description: "High-precision drilling and blasting for efficient mining operations.",
    image: "https://source.unsplash.com/800x600/?mining,drill",
  },
  {
    title: "Equipment Maintenance",
    description: "Comprehensive maintenance services for your heavy machinery.",
    image: "https://source.unsplash.com/800x600/?mining,equipment",
  },
  {
    title: "Mine Planning",
    description: "Strategic mine planning to maximize resource extraction.",
    image: "https://source.unsplash.com/800x600/?mine,planning",
  },
];
</script>
