<template>
  <section class="container max-w-7xl mx-auto py-5 px-5">
    <div class="flex flex-col ">
        <template v-for="i in 100">
          <p>{{ i }}</p>
        </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const test = ref()
</script>
