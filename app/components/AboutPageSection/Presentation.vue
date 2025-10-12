<script setup>
import { Vue3Lottie } from 'vue3-lottie';
import Frame from '~/assets/img/aboutPage/Frame-6.json';

const { width } = useWindowSize();

const isTablet = computed(() => width.value <= 768);
</script>

<template>
  <div class="relative flex items-center justify-start h-[350px] md:h-[690px] py-6 bg-no-repeat bg-cover bg-right">
    <div class="container relative z-10">
      <h5 class="text-xl md:text-3xl mb-10 md:mb-20 w-100 sm:w-2/3">
        <span class="text-sky-700"> ПромЭко — </span> это стабильный производственный партнёр, ориентированный
        на качество, научный подход и долгосрочное сотрудничество
      </h5>

      <Button>
        <div class="flex items-center gap-2">
          <span> Скачать презентацию </span>

          <Icon name="i-lucide-download" />
        </div>
      </Button>
    </div>

    <client-only>
      <Vue3Lottie :animationData="Frame" height="100%" width="auto" class="lottie"> </Vue3Lottie>
    </client-only>
  </div>
</template>

<style lang="scss">
.light-animation {
  position: absolute;
  top: 0;
  right: 0;
}

.lottie {
  position: absolute;
  right: 0;
  bottom: 0;
  width: none;

  svg {
    width: auto !important;
  }
}
</style>
