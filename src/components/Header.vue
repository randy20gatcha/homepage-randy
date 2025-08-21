<template>
 <v-app-bar app flat color="#c3c09d" class="px-4" height="150">
    <!-- Logo -->
     <a
       class="logo-link" 
       href="/" 
       rel="noopener noreferrer"
       style="text-decoration: none; display: block; line-height: 0;"
      >
        <img
          :src="logo"
          alt="ACM Transport Tech Logo"
          height="150"
          width="280"
          contain
        />
     </a>

    <!-- Desktop Navigation -->
    <v-spacer />
    <div class="d-none d-lg-flex align-center text-h2">
      <div v-for="item in navItems">
        <v-btn
          :key="item.label"
          v-if="!item.children"
          text
          class="text-button mx-2"
          size="x-large"
        >        
          <span class="text-h6">{{ item.label }}</span>
        </v-btn>

         <!-- Dropdown for SERVICES -->
        <v-menu v-else>
          <template #activator="{ props }">
            <v-btn text class="text-button mx-2" v-bind="props">
              <span class="text-h6">{{ item.label }}</span>
              <v-icon size="18" class="ml-1">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="child in item.children"
              :key="child"
              :title="child"
            />
          </v-list>
        </v-menu>
      </div>

      <!-- Phone Button -->
     <v-btn class="drawer-item">
        <template #prepend>
          <v-icon>mdi-phone</v-icon>
        </template>        
        <span class="text-h6">1800 333 539</span>
      </v-btn>
    </div>

    <!-- Mobile Menu Button -->
    <v-btn icon class="d-lg-none" @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer app v-model="drawer" temporary location="right">
    <v-list>
      <template v-for="item in navItems" :key="item.label">
      <!-- If no children: normal item -->
      <v-list-item
        v-if="!item.children"
        :title="item.label"
        class="drawer-item"
      />

      <!-- If has children: use v-list-group -->
      <v-list-group
        v-else
        :value="false"
      >
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="item.label" class="drawer-item"/>
        </template>

        <!-- children items -->
        <v-list-item
          v-for="child in item.children"
          :key="child"
          :title="child"
          class="drawer-subitem"
        />
      </v-list-group>
    </template>

      <v-list-item title="1800 333 539" class="drawer-item">
        <template #prepend>
          <v-icon>mdi-phone</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '../assets/acmtransport-logo.png'
// import logo from '../assets/logo.png'

const drawer = ref(false)
// const url = 'https://randy20gatcha.github.io/homepage-prototype/'

const navItems = [
  { label: 'HOME' },
  { label: 'ABOUT US' },
  { label: 'SERVICES',
    children: [
      'DESIGN AND ENGINEERING',
      'MANUFACTURING',
      'BUILDS AND FIT OUTS',
      'TRIMS AND ACCESSORIES',
      'AUTO ELECTRICS',
      'SERVICING AND MAINTENANCE'
    ]
  },
  { label: 'SPECIALISATION' },
  { label: 'CONTACT US' }
]

// Flatten nav items for mobile drawer
// const flatNavItems = computed(() =>
//   navItems.flatMap(item => item.children || item.label)
// )
</script>

<style scoped>
.logo-link {
  display: block;
  line-height: 0;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.logo-link:hover {
  background-color: #f0f0f0;
}

.drawer-item {
  transition: background-color 0.3s ease;
}

.drawer-subitem {
  padding-left: 16px !important; /* default is usually 32px */
}

.drawer-item:hover {
  background-color: #f0f0f0;
}
.drawer-item:active {
  background-color: #e0e0e0;
}
</style>
