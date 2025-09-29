<script setup>
const ITEMS = [
  {
    title: 'Электронная почта',
    text: 'info@prom-eko.ru',
    path: 'mailto:info@prom-eko.ru',
    type: 'email'
  },
  {
    title: 'Телефон',
    // text: '+7 495 795-04-37 <br/> +7 495 795-04-38',
    // path: 'tel:+74957950437', type: 'tel'
    // path: 'tel:+74957950437', type: 'tel',

    list: [
      {
        text: '+7 495 795-04-37',
        path: 'tel:+74957950437'
      },
      {
        text: '+7 495 795-04-38',
        path: 'tel:+74957950438'
      }
    ]
  },
  {
    title: 'Адрес',
    text: 'Москва, Летниковская, 11/10, стр... 12, Помещение IV',
    path: 'https://yandex.ru/maps/213/moscow/house/letnikovskaya_ulitsa_11_10s26/Z04YcANmT0UBQFtvfXtzcnVnZg==/?ll=37.653121%2C55.723495&z=15.25',
    type: 'location'
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

          <!-- <p v-html="item.text"></p> -->
          <template v-if="item.list">
            <NuxtLink :to="item.path" v-for="item in item.list" class="hover:text-sky-700">
              {{ item.text }}
            </NuxtLink>
          </template>

          <NuxtLink
            :to="item.path"
            v-else
            :target="item.type === 'location' ? '_blank' : '_self'"
            class="hover:text-sky-700"
          >
            {{ item.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
