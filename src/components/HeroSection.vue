<template>
   <div class="hero-carousel">
    <v-carousel
      height="100vh"
      width="100vw"
      cycle
      :show-arrows="false"
      interval="5000"
      hide-delimiter-background
      class="slow-carousel"
    >
      <v-carousel-item
        v-for="(img, i) in HER0_IMAGES"
        :key="i"
        :src="img.url"
        cover
      >
        <div class="overlay-text">
          <h1 class="hero-title">{{ img.label }}</h1>
        </div>
      </v-carousel-item>
    </v-carousel>
    <!-- Floating Button -->
    <div
      class="position-absolute text-white"
      color="amber darken-3"
      style="bottom: 260px; left: 50%; transform: translateX(-50%); z-index: 10;"
    >
      <ContactBtn />
  </div>
  </div>
</template>

<script setup lang="ts">
import { HER0_IMAGES } from "../data/hero-section";
import ContactBtn from "../views/components/ContactBtn.vue";

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

.slow-carousel .v-window__container {
  transition-duration: 10000ms !important; /* 1.5s instead of default ~300ms */
  transition-timing-function: ease-in-out !important; /* smooth start + end */
}
</style>