<template>
  <section id="testimonials" class="py-12">
    <v-container>
      <h2 class="text-h4 font-weight-bold mb-8 text-center">
        What Our Clients Say
      </h2>

      <v-carousel
        show-arrows
        hide-delimiter-background
        cycle
        interval="6000"
        height="auto"
        transition="slide-x-slow-transition"
      >
        <v-carousel-item
          v-for="(testimonial, index) in TESTIMONIALS"
          :key="index"
        >
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <v-card elevation="3" class="pa-6 rounded-lg">
                <v-avatar size="72" class="mx-auto mb-4">
                  <v-img :src="testimonial.avatar" />
                </v-avatar>

                <div class="text-subtitle-1 font-weight-medium">
                  {{ testimonial.name }}
                </div>
                <div class="text-caption mb-2">{{ testimonial.position }}</div>

                <div class="mb-4">
                  <v-icon
                    v-for="n in 5"
                    :key="n"
                    size="20"
                    color="amber"
                    class="mx-1"
                  >
                    {{ n <= testimonial.rating ? 'mdi-star' : 'mdi-star-outline' }}
                  </v-icon>
                </div>

                <blockquote class="text-body-2 italic">
                  “{{ testimonial.feedback }}”
                </blockquote>

                <div v-if="testimonial.logo" class="mt-4">
                  <v-img
                    :src="testimonial.logo"
                    alt="Client logo"
                    max-width="100"
                    class="mx-auto"
                    contain
                  />
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { TESTIMONIALS } from "../data/testimonials";
</script>

<style >
.slide-x-slow-transition-enter-active,
.slide-x-slow-transition-leave-active {
  transition: transform 5s ease-in-out !important;
}

.slide-x-slow-transition-enter-from {
  transform: translateX(100%);
}

.slide-x-slow-transition-leave-to {
  transform: translateX(-100%);
}
</style>
