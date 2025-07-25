<template>
  <v-app>
    <Header />
    <v-main>
      <HeroSection />
      <ServicesOverview id="services-overview" />
      <ValueProposition id="value-proposition" />
      <CaseStudyPreview id="case-study" />
      <Testimonials id="testimonials" />
      <Footer />
      <FloatingBtn />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSection.vue";
import ServicesOverview from "../components/ServicesOverview.vue";
import ValueProposition from "../components/ValueProposition.vue";
import CaseStudyPreview from "../components/CaseStudyPreview.vue";
import Testimonials from "../components/Testimonials.vue";
import Footer from "../components/Footer.vue";
import FloatingBtn from "../components/FloatingButton.vue"
</script>

<style>
/*
  Apply scroll-margin-top to the target sections.
  This CSS should be in a global stylesheet or in the <style> block
  of DefaultLayout.vue (without 'scoped', to apply to child components).
*/
#services-overview,
#value-proposition,
#case-study,
#testimonials {
  scroll-margin-top: 80px;
}
</style>
