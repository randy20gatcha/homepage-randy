<template v-slot:actions>
  <div class="d-flex justify-center w-100">
    <v-btn
      class="contact-btn text-white"
      prepend-icon="mdi-phone"
      color="amber darken-3"
      variant="flat"
      rounded
      style="bottom: -100px;"
    >
      <template #prepend>
        <v-icon>mdi-message</v-icon>
      </template>        
      <span class="text-h6">Send me a message</span>
    </v-btn>
  </div>
</template>

<style scoped>
.contact-btn {
  transition: transform 0.25s ease; /* smooth animation */
}

.contact-btn:hover {
  transform: scale(1.1); /* enlarge by 10% */
}
</style>
