<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(1rem);
  filter: blur(1rem);
}

.page-enter-from {
  transform: translateY(-1rem);
}
</style>
