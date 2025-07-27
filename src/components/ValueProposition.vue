<template>
  <v-container class="py-12" id="value-proposition">
    <h2 class="text-h4 font-weight-bold mb-8 text-center">Our Value Proposition</h2>
    <v-row justify="center" align="stretch" dense>
      <v-col
        v-for="(item, index) in values"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="pa-4 h-100" elevation="4" rounded="xl" link>
          <v-icon color="primary" size="40" class="mb-4">
            {{ item.icon }}
          </v-icon>
          <h3 class="text-h6 font-weight-bold mb-2">{{ item.title }}</h3>
          <p class="text-body-2">{{ item.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const values = [
  {
    icon: 'mdi-rocket-launch',
    title: 'Innovation',
    description: 'We bring cutting-edge technology to drive sustainable progress.',
  },
  {
    icon: 'mdi-shield-check',
    title: 'Reliability',
    description: 'Trusted to deliver consistent and dependable results every time.',
  },
  {
    icon: 'mdi-handshake',
    title: 'Partnership',
    description: 'Working closely with clients to understand and solve their needs.',
  },
  {
    icon: 'mdi-leaf',
    title: 'Sustainability',
    description: 'Focused on environmentally conscious and ethical practices.',
  },
];
</script>

<style scoped>
#value-proposition {
  background-color: #f9f9f9;
}
</style>
