<template>
   <div class="hero-carousel">
    <v-carousel
      height="100vh"
      width="100vw"
      cycle
      :show-arrows="false"
      interval="5000"
      hide-delimiter-background
      
    >
      <v-carousel-item
        v-for="(img, i) in images"
        :key="i"
        :src="img.url"
        cover
      >
        <div class="overlay-text">
          <h1 class="hero-title">{{ img.label }}</h1>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600&q=80',
    label: 'Mining',
  },
  {
    url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&h=600&q=80',
    label: 'Construction',
  }
];
</script>

<style scoped>
.hero-carousel {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.v-carousel {
  width: 100%;
  height: 100%;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
}

.hero-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}
</style>