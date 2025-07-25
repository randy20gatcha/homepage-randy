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
            @click="scrollToSection(btn.target)"
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
  { label: 'Services', icon: 'mdi-briefcase-outline', target: 'services-overview' },
  { label: 'Value', icon: 'mdi-star-outline', target: 'value-proposition' },
  { label: 'Case Study', icon: 'mdi-file-document-outline', target: 'case-study' },
  { label: 'Testimonials', icon: 'mdi-account-voice', target: 'testimonials' }
]

const scrollToSection = (targetId: string) => {
  const el = document.getElementById(targetId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
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
