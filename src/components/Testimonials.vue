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
      >
        <v-carousel-item
          v-for="(testimonial, index) in testimonials"
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
const testimonials = [
  {
    name: "Jane Smith",
    position: "Health Services Director",
    feedback:
      "FeelDX helped us streamline patient processes with efficient and secure digital tools. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/PhilHealth_logo.png",
  },
  {
    name: "Carlos Gomez",
    position: "CIO, FinanceConnect",
    feedback:
      "Professional team, fast turnaround, and excellent results. Our onboarding system was transformed.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Globe_Telecom_logo.svg/2560px-Globe_Telecom_logo.svg.png",
  },
  {
    name: "Emily Chen",
    position: "E-learning Coordinator",
    feedback:
      "The new digital platform improved student engagement dramatically. Thank you FeelDX!",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    rating: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/DepEd.svg/1280px-DepEd.svg.png",
  },
];
</script>
