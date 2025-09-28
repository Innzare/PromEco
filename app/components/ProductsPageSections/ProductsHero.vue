<template>
  <div class="products-hero">
    <div class="container">
      <div class="w-100 md:w-2/5">
        <h1 class="text-2xl md:text-5xl mb-6">Широкий ассортимент для любых задач нефтехимии</h1>

        <p class="text-stone-300 md:text-stone-500">
          Разрабатываем, производим и поставляем эффективные химические продукты для предприятий нефтепереработки,
          нефтехимии и смазочных материалов
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-hero {
  background: url('~/assets/img/productsPage/hero.webp') no-repeat center;
  background-size: cover;
  height: 660px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    background: url('~/assets/img/productsPage/hero.webp') no-repeat 85%;
    background-size: cover;
    align-items: flex-start;
    padding: 20px;
    height: 360px;
  }

  @media (max-width: 425px) {
    height: 320px;
  }
}
</style>
