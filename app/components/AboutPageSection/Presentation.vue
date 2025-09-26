<script setup>
// import { Vue3Lottie } from 'vue3-lottie';
// import light from '~/assets/img/aboutPage/light.json';
</script>

<template>
  <div
    class="relative flex items-center justify-start h-96 bg-[url(~/assets/img/aboutPage/light.webp)] bg-no-repeat bg-cover"
  >
    <div class="container">
      <h5 class="text-left text-2xl md:text-3xl mb-10 md:mb-20 w-2/3">
        <span class="text-red-700"> ПромЭко — </span> это стабильный производственный партнёр, ориентированный
        на качество, научный подход и долгосрочное сотрудничество
      </h5>

      <Button>
        <div class="flex items-center gap-2">
          <span> Скачать презентацию </span>

          <Icon name="i-lucide-download" />
        </div>
      </Button>
    </div>

    <!-- <client-only> -->
    <!-- <Vue3Lottie class="light-animation" :animationData="light" height="100%" width="100%" /> -->
    <!-- </client-only> -->
  </div>
</template>

<style lang="scss" scoped>
.light-animation {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
