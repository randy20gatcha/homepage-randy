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
const services = [
  {
    title: "Drilling & Blasting",
    description: "High-precision drilling and blasting for efficient mining operations.",
    image: "https://images.pexels.com/photos/723905/pexels-photo-723905.jpeg?_gl=1*13x8iht*_ga*MTMzMzUzNjE2NS4xNzUzNTk5MDAx*_ga_8JE65Q40S6*czE3NTM2MDY4MjckbzIkZzEkdDE3NTM2MDcxMzIkajQ5JGwwJGgw",
  },
  {
    title: "Equipment Maintenance",
    description: "Comprehensive maintenance services for your heavy machinery.",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?_gl=1*16lb5ec*_ga*MTMzMzUzNjE2NS4xNzUzNTk5MDAx*_ga_8JE65Q40S6*czE3NTM2MDY4MjckbzIkZzEkdDE3NTM2MDcxNjckajE0JGwwJGgw",
  },
  {
    title: "Mine Planning",
    description: "Strategic mine planning to maximize resource extraction.",
    image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?_gl=1*1nun77*_ga*MTMzMzUzNjE2NS4xNzUzNTk5MDAx*_ga_8JE65Q40S6*czE3NTM2MDY4MjckbzIkZzEkdDE3NTM2MDcyMDYkajQ0JGwwJGgw",
  },
];
</script>
