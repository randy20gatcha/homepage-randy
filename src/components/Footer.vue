<template>
  <v-footer color="#202318" class="text-white pt-8">
    <v-container>
      <v-row>
        <!-- Company Info -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <a href="https://example.com" target="_blank">
            <v-img
              :src="logo"
              alt="FEELDX Logo"
              max-height="70"
              contain
              class="mr-4"
            />
          </a>        
        </v-col>

        <!-- Navigation Links -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <v-list-item
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="text-white px-0"
          >
            {{ link.label }}
          </v-list-item>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" md="4">
          <h4 class="text-subtitle-1 font-weight-medium">Contact Us</h4>
          <div class="text-body-2">
            <div><v-icon size="18" class="mr-1">mdi-phone</v-icon> 1800 333 539</div>
            <span></span>
            <div>
              <v-icon size="18" class="mr-1">mdi-map-marker</v-icon>
              <span>
                WATERMAN BUSINESS CENTRE
                Suite 70,
              </span> <br>
              <span> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44 LAKEVIEW DR
                SCORESBY 3179
              </span>
            </div>
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
import logo from '../assets/logo-footer.png'

const links = [
  { label: 'STUDIO', href: "_blank" },
  { label: 'PROJECT CONTROL', href: "_blank" },
  { label: 'SERVICES', href: "_blank" },
  { label: 'TECHNOLOGY', href: "_blank" },
  { label: 'OUR WORK', href: "_blank" },
  { label: 'CONTACT US', href: "_blank" },
  {
    label: 'ABOUT US',
    children: ['Our Team', 'Our Story'],
    href: "_blank"
  },
  { label: 'NEWS', href: "_blank" }
]
</script>
