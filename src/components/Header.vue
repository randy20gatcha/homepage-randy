<template>
 <v-app-bar app flat color="white" class="px-4">
    <!-- Logo -->
     <a 
       :href="url" 
       rel="noopener noreferrer"
       style="text-decoration: none; display: block; line-height: 0;"
      >
        <v-img
          :src="logo"
          alt="FEELDX Logo"
          height="50"
          width="100"
          contain
        />
     </a>

    <!-- Desktop Navigation -->
    <v-spacer />
    <div class="d-none d-md-flex align-center">
      <div v-for="item in navItems">
        <v-btn
          :key="item.label"
          v-if="!item.children"
          text
          class="text-button mx-2"
        >
          {{ item.label }}
        </v-btn>
      </div>

      <!-- Dropdown for ABOUT US -->
      <v-menu v-if="aboutUsItem">
        <template #activator="{ props }">
          <v-btn text class="text-button mx-2" v-bind="props">
            {{ aboutUsItem.label }}
            <v-icon size="18" class="ml-1">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="child in aboutUsItem.children"
            :key="child"
            :title="child"
          />
        </v-list>
      </v-menu>

      <!-- Phone Button -->
      <v-btn
        class="ml-4"
        color="grey"
        variant="outlined"
        style="border: 1px solid #000"
      >
        1800 333 539
      </v-btn>
    </div>

    <!-- Mobile Menu Button -->
    <v-btn icon class="d-md-none" @click="drawer = true">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer app v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item
        v-for="item in flatNavItems"
        :key="item"
        :title="item"
      />
      <v-list-item title="1800 333 539" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import logo from '../assets/logo.png'

const drawer = ref(false)
const url = 'https://randy20gatcha.github.io/homepage-prototype/'

const navItems = [
  { label: 'STUDIO' },
  { label: 'PROJECT CONTROL' },
  { label: 'SERVICES' },
  { label: 'TECHNOLOGY' },
  { label: 'OUR WORK' },
  { label: 'CONTACT US' },
  {
    label: 'ABOUT US',
    children: ['Our Team', 'Our Story']
  },
  { label: 'NEWS' }
]

// For dropdown menu
const aboutUsItem = navItems.find(item => item.label === 'ABOUT US')

// Flatten nav items for mobile drawer
const flatNavItems = computed(() =>
  navItems.flatMap(item => item.children || item.label)
)
</script>
