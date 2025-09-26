<script setup>
const ITEMS = [
  {
    title: 'Разработка составов',
    text: 'Исследование и создание новых химических продуктов, адаптированных под требования нефтехимической отрасли',
    icon: 'first'
  },
  {
    title: 'Контроль качества',
    text: 'Проверка каждой партии продукции по показателям стабильности, эффективности и соответствию техническим условиям',
    icon: 'second'
  },
  {
    title: 'Поддержка производства',
    text: 'Сопровождение технологических процессов, анализ проб, подбор оптимальных решений на всех этапах',
    icon: 'third'
  }
];
</script>
<template>
  <div class="py-20 md:py-[160px]">
    <div class="container">
      <div class="text-left mb-5 md:mb-10">
        <h2 class="text-2xl md:text-5xl mb-4">Научный подход — в основе каждого продукта</h2>

        <p class="text-stone-500">
          Мы сочетаем фундаментальные знания с практическим опытом внедрения химических решений на предприятиях.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="p-6 rounded-lg flex flex-col gap-4 bg-black-200 text-left border border-black-100"
          v-for="(item, index) in ITEMS"
          :key="index"
        >
          <DigitIcon :type="item.icon" size="lg" class="text-red-700" />
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-stone-500">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
