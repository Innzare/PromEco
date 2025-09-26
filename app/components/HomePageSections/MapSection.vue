<script setup>
import { Vue3Lottie } from 'vue3-lottie';
import map from '~/assets/img/homePage/map.json';

const { width } = useWindowSize();

const isTablet = computed(() => width.value <= 768);
</script>

<template>
  <div class="container">
    <section class="map">
      <h2 class="text-left md:text-center text-2xl md:text-3xl mb-4">Широкая география логистики</h2>

      <p class="text-left md:text-center text-stone-700 mb-10">
        Компания осуществляет регулярные поставки продукции по всей России, а также в страны СНГ и дружественные
        зарубежные государства.
      </p>

      <p class="text-left md:text-center max-w-lg m-auto mb-10">
        Россия, Китай, Бразилия, ОАЭ, Индия, Азербайджан, Иран, Турция, Италия, Грузия, Беларусь, Сербия, Сингапур,
        Индонезия, Катар, Кувейт, Казахстан, Узбекистан, Таджикистан, Ирак, Египет
      </p>

      <client-only>
        <Vue3Lottie :animationData="map" :height="isTablet ? 150 : 600" width="100%" />
      </client-only>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.map {
  margin-bottom: 100px;
  background-color: var(--color-black-100);
  border-radius: 16px;
  padding: 64px;
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding: 24px;
    padding-bottom: 0;
    margin-bottom: 40px;
  }
}
</style>
