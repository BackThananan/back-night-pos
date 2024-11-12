<template>
  <div class=" flex items-center gap-2" :class="{'py-5 px-5' : padded}">
    <UIcon class="w-8 h-8" name="i-heroicons-home-solid"></UIcon>
    <p class="text-xl font-medium pt-1" :class="{'hidden' :isSmall}">Night POS</p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  isSmall?: boolean
  padded?: boolean
}>(), {
  isSmall: false,
  padded: true
})
</script>

