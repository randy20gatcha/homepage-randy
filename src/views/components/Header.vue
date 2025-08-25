<template>
   <h2 class="text-h4 font-weight-bold mb-8 text-center">
     {{ title }}
   </h2>
    
   <v-card class="mb-3 text-center w-100" flat>
     <v-card-title class="text-wrap whitespace-normal break-normal">
        <span v-for="(sentence, i) in formattedDescription" :key="i">
          {{ sentence }}<span v-if="i < formattedDescription.length - 1"><br /></span>
        </span>
     </v-card-title>
   </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title?: string
  description?: string
}>()

const formattedDescription = computed(() => {
  if (!props.description) return []
  return props.description.split(/\. +/).filter(s => s.length).map(s => s + ".")
})
</script>
