<template>
  <section class="container max-w-7xl mx-auto py-5 px-5">
    <the-breadcrumb
        title="ประเภทเมนู"
        :links="[
            {
              label: 'หน้าหลัก',
              to: '/'
            },
            {
              label: 'ประเภทเมนู',
              to: '/menu/type'
            }
        ]"
    />
  </section>
</template>

<script setup lang="ts">

import TheBreadcrumb from "~/components/TheBreadcrumb.vue";
</script>

<style scoped>

</style>