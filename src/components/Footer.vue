<template>
  <v-footer color="primary" class="text-white pt-8">
    <v-container>
      <v-row>
        <!-- Company Info -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <h4 class="text-h6 font-weight-bold">FeelDX</h4>
          <p class="text-body-2">
            Creating digital experiences for healthcare, education, and government.
          </p>
        </v-col>

        <!-- Navigation Links -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <h4 class="text-subtitle-1 font-weight-medium">Quick Links</h4>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :href="link.href"
            class="text-white px-0"
          >
            <v-icon size="18" class="mr-2">mdi-chevron-right</v-icon>
            {{ link.text }}
          </v-list-item>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" md="4">
          <h4 class="text-subtitle-1 font-weight-medium">Contact Us</h4>
          <div class="text-body-2">
            <div><v-icon size="18" class="mr-1">mdi-email</v-icon> info@feeldx.com</div>
            <div><v-icon size="18" class="mr-1">mdi-phone</v-icon> +63 912 345 6789</div>
            <div><v-icon size="18" class="mr-1">mdi-map-marker</v-icon> Metro Manila, Philippines</div>
          </div>
        </v-col>
      </v-row>

      <!-- Divider -->
      <v-divider class="my-4" />

      <!-- Bottom Bar -->
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center text-body-2">
          &copy; {{ new Date().getFullYear() }} FeelDX. All rights reserved.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const links = [
  { text: "Services", href: "#services" },
  { text: "Case Studies", href: "#case-study" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Contact", href: "#footer" },
];
</script>
