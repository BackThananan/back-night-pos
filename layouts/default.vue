<template>
  <main>
    <div class="flex">
      <the-side-navigation />
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
import TheSideNavigation from "~/components/TheSideNavigation.vue";
</script>

