<script setup>
import productSlide1 from '~/assets/img/homePage/product-slide-1.webp';
import productSlide2 from '~/assets/img/homePage/product-slide-2.webp';
import productSlide3 from '~/assets/img/homePage/product-slide-3.webp';
import productSlide4 from '~/assets/img/homePage/product-slide-4.webp';
import productSlide5 from '~/assets/img/homePage/product-slide-5.webp';

const TABS = [
  {
    img: productSlide1,
    title: 'Присадки для топлив',
    text: 'Позволяют улучшить эксплуатационные свойства, снизить износ оборудования, повысить экологические и экономические характеристики топлива.',
    id: 0
  },
  {
    img: productSlide2,
    title: 'Присадки для смазочных материалов',
    text: 'Добавки для смазочных материалов обеспечивают стабильную работу механизмов при высоких нагрузках и в экстремальных условиях.',
    id: 1
  },
  {
    img: productSlide3,
    title: 'Реагенты',
    text: 'Высокоэффективные химические реагенты, предназначенные для стабилизации процессов в нефтехимии и повышения эффективности переработки.',
    id: 2
  },
  {
    img: productSlide4,
    title: 'Полимерные добавки',
    text: 'Продукты, улучшающие физико-химические свойства готовых смесей, масел, топлив. Повышают вязкость, адгезию, модифицируют свойства материалов.',
    id: 3
  },
  {
    img: productSlide5,
    title: 'Крупнотоннажная химия',
    text: 'Базовые химические компоненты, производимые в больших объёмах, применяются как основа для дальнейшего синтеза или подготовки готовых формул.',
    id: 4
  }
];

const activeTab = ref(0);

const setActiveTab = (id) => {
  activeTab.value = id;
};
</script>

<template>
  <section class="container">
    <div class="sm:block hidden p-10 bg-black-200 rounded-2xl mt-10">
      <div
        :style="{
          backgroundImage: `url(${TABS[activeTab].img})`
        }"
        class="h-[400px] w-100 mb-[20px] rounded-lg bg-center bg-no-repeat bg-cover transition-all"
      ></div>

      <div class="flex gap-10">
        <div class="flex flex-1 flex-col gap-2">
          <div
            v-for="tab in TABS"
            :key="tab.id"
            @click="setActiveTab(tab.id)"
            :class="`flex items-center justify-between   cursor-pointer px-6 py-4 rounded-lg bg-black-100 ${
              activeTab === tab.id ? 'bg-sky-700' : ''
            } hover:bg-sky-700 transition-all`"
          >
            {{ tab.title }}

            <Icon name="i-lucide-arrow-right" size="20px" />
          </div>
        </div>

        <div class="flex-1">
          <Tab1 v-if="activeTab === 0" />

          <Tab2 v-if="activeTab === 1" />

          <Tab3 v-if="activeTab === 2" />

          <Tab4 v-if="activeTab === 3" />

          <Tab5 v-if="activeTab === 4" />
        </div>
      </div>
    </div>

    <div class="sm:hidden flex flex-col gap-5 mt-10">
      <div class="p-4 sm:p-6 bg-black-200 rounded-2xl" v-for="(item, index) in TABS" :key="index">
        <img :src="item.img" alt="Product image" class="mb-6 rounded-lg" />

        <h6 class="text-xl mb-4">{{ item.title }}</h6>
        <p class="text-stone-500 text-sm">{{ item.text }}</p>
      </div>
    </div>

    <div class="flex justify-center my-10 sm:my-20">
      <Button size="small">
        <div class="flex items-center gap-4">
          <span> Скачать презентацию </span>
          <Icon name="i-lucide-download" size="20px" />
        </div>
      </Button>
    </div>
  </section>
</template>
