<template>
  <div class="lab-hero">
    <div class="container">
      <div class="w-100 md:w-2/5">
        <h1 class="text-2xl md:text-5xl mb-6">Научно-исследовательская лаборатория ПромЭко</h1>

        <p class="text-stone-300 md:text-stone-500">
          Инновационные разработки, строгий контроль качества и сертифицированные методы испытаний — основа нашей
          продукции
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lab-hero {
  background: url('~/assets/img/labPage/hero.webp') no-repeat center;
  background-size: cover;
  height: 660px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    background: url('~/assets/img/labPage/hero.webp') no-repeat 85%;
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
