<template>
  <section id="case-study-preview" class="py-12">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-6 text-center">Case Studies</h2>
        </v-col>

        <v-col
          v-for="(study, index) in caseStudies"
          :key="index"
          cols="12"
          md="4"
        >
          <v-card elevation="4" class="rounded-lg" link>
            <v-img :src="study.image" height="200px" cover></v-img>

            <v-card-title class="text-h6 font-weight-medium">
              {{ study.title }}
            </v-card-title>

            <v-card-subtitle class="text-subtitle-2">
              {{ study.subtitle }}
            </v-card-subtitle>

            <v-card-text class="text-body-2">
              {{ study.description }}
            </v-card-text>

            <v-card-actions>
              <v-btn text color="primary" :href="study.link" target="_blank">
                Read More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const caseStudies = [
  {
    title: "Healthcare Transformation",
    subtitle: "Public Sector",
    description:
      "Improving patient access through digital healthcare solutions.",
    image: "https://images.pexels.com/photos/280081/pexels-photo-280081.jpeg",
    link: "#",
  },
  {
    title: "Digital Onboarding",
    subtitle: "Finance",
    description:
      "A secure and user-friendly system for onboarding banking clients.",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?_gl=1*1ai8gj2*_ga*MTMzMzUzNjE2NS4xNzUzNTk5MDAx*_ga_8JE65Q40S6*czE3NTM2MDY4MjckbzIkZzEkdDE3NTM2MDY5NTckajYwJGwwJGgw",
    link: "#",
  },
  {
    title: "Smart Education Platform",
    subtitle: "Education",
    description:
      "A case study of e-learning improvements in a national school system.",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?_gl=1*imi4b*_ga*MTMzMzUzNjE2NS4xNzUzNTk5MDAx*_ga_8JE65Q40S6*czE3NTM2MDY4MjckbzIkZzEkdDE3NTM2MDcwMTAkajckbDAkaDA.",
    link: "#",
  },
];
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
