<template>
  <div class="about-hero">
    <div class="container">
      <h1 class="text-2xl md:text-5xl text-left w-100 md:w-1/3">Функциональные решения для сложных процессов</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-hero {
  background: url('~/assets/img/aboutPage/background.webp') no-repeat center;
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
    background: url('~/assets/img/aboutPage/background.webp') no-repeat 85%;
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
