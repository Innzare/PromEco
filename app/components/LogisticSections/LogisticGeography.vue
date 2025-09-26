<script setup>
import { Vue3Lottie } from 'vue3-lottie';
import map from '~/assets/img/homePage/map.json';

const { width } = useWindowSize();

const isTablet = computed(() => width.value <= 768);

const ITEMS = [
  {
    title: 'Собственная инфраструктура',
    text: 'Железнодорожная ветка и автотранспорт на балансе компании позволяют быстро реагировать на заказы.',
    icon: 'first'
  },
  {
    title: 'Контроль сроков поставки',
    text: 'Вся логистика централизована и отслеживается — от отгрузки до приёма у клиента.',
    icon: 'second'
  },
  {
    title: 'Индивидуальный подход',
    text: 'Мы адаптируем схемы поставок под производственный график каждого партнёра.',
    icon: 'third'
  }
];
</script>

<template>
  <div class="container">
    <section class="bg-black-200 rounded-lg p-8 mb-10 md:mb-20">
      <h2 class="text-2xl md:text-4xl mb-4">Широкая география логистики</h2>

      <p class="text-stone-500 mb-10">
        Компания осуществляет регулярные поставки продукции по всей России, а также в страны СНГ и дружественные
        зарубежные государства.
      </p>

      <client-only>
        <Vue3Lottie :animationData="map" :height="isTablet ? 150 : 600" width="100%" />
      </client-only>

      <p class="text-left md:text-center max-w-lg m-auto my-10">
        Россия, Китай, Бразилия, ОАЭ, Индия, Азербайджан, Иран, Турция, Италия, Грузия, Беларусь, Сербия, Сингапур,
        Индонезия, Катар, Кувейт, Казахстан, Узбекистан, Таджикистан, Ирак, Египет
      </p>

      <h2 class="text-2xl md:text-4xl mb-4">Почему нам доверяют</h2>

      <p class="text-stone-500 mb-10">
        Своевременная и качественная доставка продукции клиенту осуществляется за счёт индивидуального подхода к каждому
        клиенту
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div
          class="flex flex-col gap-3 p-8 rounded-lg text-left bg-black-100 border border-black-50"
          v-for="(item, index) in ITEMS"
          :key="index"
        >
          <DigitIcon :type="item.icon" class="text-red-700" size="lg" />

          <h5 class="text-xl">{{ item.title }}</h5>

          <p class="text-stone-500">{{ item.text }}</p>
        </div>
      </div>

      <div class="flex justify-center">
        <Button>
          <div class="flex items-center gap-3">
            <span>Посмотреть продукцию</span>

            <Icon name="i-lucide-arrow-right" size="20" />
          </div>
        </Button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
