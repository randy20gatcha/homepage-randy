<template>
  <div id="floating-button" class="d-none d-md-flex flex-column gap-4">
    <div
      v-for="(btn, index) in buttons"
      :key="index"
      class="mb-10"
    >
      <v-tooltip :text="btn.label" location="left">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            @click="scrollToSection(btn.target, btn.duration)"
            icon
            size="small"
            color="primary"
            elevation="4"
          >
            <v-icon>{{ btn.icon }}</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
const buttons = [
  { label: 'Services', icon: 'mdi-briefcase-outline', target: 'services-overview', duration: 1000 },
  { label: 'Value', icon: 'mdi-star-outline', target: 'value-proposition', duration: 1100 },
  { label: 'Case Study', icon: 'mdi-file-document-outline', target: 'case-study', duration: 1200 },
  { label: 'Testimonials', icon: 'mdi-account-voice', target: 'testimonials', duration: 1300 }
]

const scrollToSection = (targetId: string, duration = 1000, offset = 110) => {
  // stock scrolling behaviour
  // const el = document.getElementById(targetId)
  // if (el) {
  //   el.scrollIntoView({ behavior: 'smooth' })
  // }

  // Smooth scroll effect
  const el = document.getElementById(targetId);
  if (!el) return;

  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start - offset;
  const startTime = performance.now();

  const ease = (t: number) => t < 0.5
    ? 2 * t * t
    : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const scroll = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = ease(progress);

    window.scrollTo(0, start + (end - start) * eased);

    if (progress < 1) requestAnimationFrame(scroll);
  };

  requestAnimationFrame(scroll);
}
</script>

<style scoped>
#floating-button {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 1000;
}
</style>
