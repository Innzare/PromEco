<template>
  <div
    class="relative flex items-center justify-start h-[350px] md:h-[700px] py-8 bg-[url(~/assets/img/aboutPage/light.webp)] bg-no-repeat bg-cover bg-right"
  >
    <div class="container">
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
  </div>
</template>

<style lang="scss" scoped>
.light-animation {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
