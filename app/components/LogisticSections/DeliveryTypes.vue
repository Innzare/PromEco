<script setup>
const ITEMS = [
  {
    title: 'Железнодорожный транспорт',
    text: 'Компания сотрудничает с владельцами подвижного состава, что позволяет гибко планировать логистику и обеспечивать бесперебойные поставки на дальние расстояния.',
    icon: 'i-lucide-tram-front'
  },
  {
    title: 'Автомобильный транспорт',
    text: 'Поставка продукции также осуществляется с использованием собственного автопарка, а также через надёжных логистических партнёров.',
    icon: 'i-lucide-car-front'
  },
  {
    title: 'Морские грузоперевозки',
    text: 'Компания осуществляет международную поставку продукции морским транспортом в сотрудничестве с проверенными судоходными и логистическими операторами.',
    icon: 'i-lucide-ship'
  }
];
</script>

<template>
  <div class="container">
    <section class="py-20">
      <div class="text-left mb-[60px]">
        <h2 class="text-2xl md:text-3xl mb-4">Способы отгрузки продукции</h2>

        <p class="text-stone-500">
          Мы сочетаем фундаментальные знания с практическим опытом внедрения химических решений на предприятиях.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="flex flex-col gap-3 p-8 rounded-lg text-left bg-black-100 border border-black-50"
          v-for="(item, index) in ITEMS"
          :key="index"
        >
          <Icon :name="item.icon" size="28px" class="text-red-500" />

          <h5 class="text-xl">{{ item.title }}</h5>

          <p class="text-stone-500">{{ item.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
