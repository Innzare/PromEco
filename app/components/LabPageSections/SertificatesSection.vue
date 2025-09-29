<script setup>
import lab1 from '~/assets/img/labPage/lab-1.webp';
import lab2 from '~/assets/img/labPage/lab-2.webp';
import lab3 from '~/assets/img/labPage/lab-3.webp';

const { width } = useWindowSize();

const isTablet = computed(() => width.value <= 768);

const ITEMS = [
  {
    icon: 'i-lucide-badge-check',
    title: 'Стандарт качества ISO',
    text: 'В 2018 году система менеджмента качества компании прошла проверку и признана соответствующей стандарту ISO 9001:2015',
    downloadLink: 'link'
  },
  {
    icon: 'i-lucide-badge-check',
    title: 'Аттестат аккредитации',
    text: 'В 2017 году лаборатория была аккредитована Ассоциацией аналитических центров «Аналитика» и получила Аттестат аккредитации',
    downloadLink: 'link'
  },
  {
    icon: 'i-lucide-badge-check',
    title: 'Международный стандарт ИСО/МЭК',
    text: 'Соответствие требованиям ISO/IEC 17025:2005 (ГОСТ ИСО/МЭК 17025–2009) гарантирует объективность, воспроизводимость и признание результатов испытаний',
    downloadLink: 'link'
  }
];

const LABS = [
  {
    img: lab1,
    col: 'col-span-1 md:col-span-4 hidden'
  },
  {
    img: lab2,
    col: 'col-span-1 md:col-span-2 hidden'
  },
  {
    img: null,
    text: 'Техническая база лаборатории постоянно обновляется, что позволяет нам проводить комплексные исследования и внедрять новейшие методы анализа.',
    col: 'col-span-1 md:col-span-3 '
  },
  {
    img: lab3,
    col: 'col-span-1 md:col-span-3 hidden'
  }
];
</script>

<template>
  <div class="container">
    <div class="bg-black-200 p-4 pb-8 md:px-[100px] md:py-[80px] rounded-lg mb-10 md:mb-20">
      <div class="mb-8 md:mb-16">
        <h2 class="text-2xl md:text-4xl mb-4 sm:text-center">Современное лабораторное оборудование</h2>

        <p class="text-stone-500 mb-8 md:mb-16 sm:text-center">
          Мы используем аналитическое оборудование ведущих мировых производителей. Это позволяет проводить исследования
          в полном соответствии с отраслевыми стандартами и техническими условиями
        </p>

        <div class="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8">
          <div
            v-for="(item, index) in LABS"
            :key="index"
            :style="{ backgroundImage: `url(${item.img})` }"
            :class="`  sm:flex flex-col justify-center items-start gap-4 h-[250px] md:h-[400px] bg-cover bg-center bg-no-repeat p-6 bg-black-100 rounded-xl ${item.col}`"
          >
            <img v-if="!item.img" src="~/assets/img/logo.webp" alt="Logo img" class="w-[200px]" />
            <span class="text-stone-500">{{ item.text }}</span>
          </div>
        </div>
      </div>

      <h2 class="text-xl md:text-4xl mb-4">Сертификация и соответствие международным стандартам</h2>

      <p class="text-sm md:text-base text-stone-500 mb-8 md:mb-16">
        Наша лаборатория соответствует требованиям ведущих международных и российских стандартов.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-16">
        <div
          class="flex flex-col flex-wrap gap-4 p-6 rounded-lg bg-black-100"
          v-for="(item, index) in ITEMS"
          :key="index"
        >
          <Icon :name="item.icon" size="28px" class="text-sky-700" />

          <h5 class="text-xl">{{ item.title }}</h5>

          <p class="text-stone-500">{{ item.text }}</p>
        </div>
      </div>

      <div class="flex justify-center">
        <NuxtLink to="/products">
          <Button :block="isTablet" :size="isTablet ? 'sm' : 'md'">
            <div class="flex gap-3 items-center">
              <span>Посмотреть продукцию</span>
              <Icon name="i-lucide-arrow-right" size="20px" />
            </div>
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
