<script setup lang="ts">
const links = [
  { name: "Home", path: "/" },
  { name: "CountUp", path: "/count-up" },
  { name: "Blog", path: "/blog" },
]
</script>

<template>
  <div class="h-12 bg-emerald-600">
    <nav class="flex items-center p-3 h-full gap-3">
      <RouterLink :key="link.name" v-for="link in links" :to="link.path">{{ link.name }}</RouterLink>
    </nav>
  </div>
</template>
