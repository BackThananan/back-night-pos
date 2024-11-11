<template>
  <main>
    <div class="flex">
      <aside
          class="w-[270px] h-screen border-r border-light-border dark:border-dark-border shrink-0 sticky top-0 inset-x-0">
        <div class="py-5 px-5 flex items-center gap-2">
          <UIcon class="w-8 h-8" name="i-heroicons-home-solid"></UIcon>
          <p>Night POS</p>
        </div>
      </aside>
      <div class="w-full page-wrapper">
        <the-header/>
        <div class="max-w-full pt-6">
          <slot/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import TheHeader from "~/components/TheHeader.vue";
</script>

<style scoped>

</style>