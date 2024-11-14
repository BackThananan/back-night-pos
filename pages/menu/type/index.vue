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

    <div class="grid grid-cols-2 mt-6 gap-4">
      <UFormGroup label="ชื่อประเภท">
        <UInput placeholder="ชื่อประเภท"></UInput>
      </UFormGroup>

      <UFormGroup label="ชื่อประเภท">
        <UInput placeholder="ชื่อประเภท"></UInput>
      </UFormGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheBreadcrumb from "~/components/TheBreadcrumb.vue";
</script>
