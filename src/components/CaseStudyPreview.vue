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
          <v-card elevation="4" class="rounded-lg">
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
    image: "https://source.unsplash.com/featured/?hospital",
    link: "#",
  },
  {
    title: "Digital Onboarding",
    subtitle: "Finance",
    description:
      "A secure and user-friendly system for onboarding banking clients.",
    image: "https://source.unsplash.com/featured/?finance",
    link: "#",
  },
  {
    title: "Smart Education Platform",
    subtitle: "Education",
    description:
      "A case study of e-learning improvements in a national school system.",
    image: "https://source.unsplash.com/featured/?education",
    link: "#",
  },
];
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
