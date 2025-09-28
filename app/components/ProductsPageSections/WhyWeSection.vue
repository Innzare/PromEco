<script setup>
const LIST = [
  {
    icon: 'i-lucide-waypoints',
    title: 'Индивидуальный подбор решений',
    text: 'Адаптируем составы под требования конкретного производства, обеспечивая максимальную совместимость и эффективность'
  },
  {
    icon: 'i-lucide-microscope',
    title: 'Контроль качества',
    text: 'Каждая партия продукции проходит контроль на соответствие техническим условиям и отраслевым стандартам'
  },
  {
    icon: 'i-lucide-globe',
    title: 'Импортонезависимость',
    text: 'Продукция производится в России — это стабильные поставки и устойчивость к внешним ограничениям'
  },
  {
    icon: 'i-lucide-file-check',
    title: 'Документальное сопровождение',
    text: 'Вся продукция сертифицирована, сопровождается паспортами качества, MSDS и необходимой документацией'
  }
];
</script>

<template>
  <section class="bg-black-200 py-10 sm:py-20">
    <div class="container">
      <h2 class="text-3xl">Почему выбирают продукцию ПромЭко</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10">
        <div
          v-for="(item, index) in LIST"
          :key="index"
          class="flex flex-col gap-6 items-center bg-black-100 p-4 sm:p-8 rounded-lg hover:shadow-lg transition-shadow border border-gray-700"
        >
          <Icon :name="item.icon" size="40px" class="text-sky-700" />
          <h3 class="text-xl mb-2">{{ item.title }}</h3>
          <p class="text-stone-500">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
