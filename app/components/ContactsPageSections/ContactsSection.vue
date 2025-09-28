<script setup>
const ITEMS = [
  {
    title: 'Электронная почта',
    text: 'info@prom-eko.ru'
  },
  {
    title: 'Телефон',
    text: '+7 495 795-04-37 <br/> +7 495 795-04-38'
  },
  {
    title: 'Адрес',
    text: 'Москва, Летниковская, 11/10, стр.. 12, Помещение IV'
  }
];
</script>

<template>
  <section class="py-[40px] md:py-[80px]">
    <div class="container">
      <h2 class="text-3xl md:text-4xl mb-[30px] md:mb-[60px]">Контакты</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div
          class="flex flex-col gap-4 p-8 rounded-xl bg-black-200 border border-black-100"
          v-for="(item, index) in ITEMS"
          :key="index"
        >
          <h6 class="text-xl text-stone-500">{{ item.title }}</h6>

          <p v-html="item.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
