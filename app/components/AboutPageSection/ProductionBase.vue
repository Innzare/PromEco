<script setup>
import { motion } from 'motion-v';

const ITEMS = [
  {
    text: 'Снизить себестоимость без потери качества',
    icon: 'i-lucide-flask-conical'
  },
  {
    text: 'Минимизировать сроки поставки за счёт гибкой логистики',
    icon: 'i-lucide-clock'
  },
  {
    text: 'Оперативно реагировать на потребности клиентов',
    icon: 'i-lucide-cog'
  }
];
</script>

<template>
  <div class="container">
    <div class="production-base">
      <motion.h3
        :initial="{ opacity: 0, y: 50 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
        :inViewOptions="{ once: true, amount: 0.3 }"
        class="text-xl md:text-3xl lg:text-5xl mb-5"
        >Собственная производственная база</motion.h3
      >

      <div>
        <motion.p
          :initial="{ opacity: 0, y: 50 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          :inViewOptions="{ once: true, amount: 0.3 }"
          class="text-sm sm:text-base text-stone-500 mb-10 md:w-100 lg:w-1/2"
        >
          Наличие собственной производственной базы на территории России обеспечивает нам полный контроль над всеми
          этапами выпуска продукции. Это позволяет:
        </motion.p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <img
          src="~/assets/img/aboutPage/team-1.webp"
          alt="Team img"
          class="rounded-xl object-cover lg:col-span-2 h-100"
        />

        <div class="flex-1 flex flex-col sm:flex-row lg:flex-col gap-3 lg:gap-6 justify-start mb-10">
          <motion.div
            :initial="{ opacity: 0, y: 50 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, ease: 'easeOut' }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            class="flex flex-col items-center md:items-start gap-4 rounded-xl bg-black-100 p-4 lg:p-8"
            v-for="(item, index) in ITEMS"
            :key="index"
          >
            <Icon :name="item.icon" class="text-sky-700" size="24px" />

            <span class="text-stone-500 text-center md:text-left lg:text-base">
              {{ item.text }}
            </span>
          </motion.div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div class="flex flex-col p-6 bg-black-100 rounded-xl">
          <h2 class="text-2xl mb-6">Наша команда</h2>

          <div class="flex justify-center">
            <motion.p
              class="text-stone-500"
              :initial="{ opacity: 0, y: 50 }"
              :whileInView="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.8, ease: 'easeOut' }"
              :inViewOptions="{ once: true, amount: 0.3 }"
            >
              Наш коллектив — это команда высококвалифицированных химиков, технологов и инженеров с многолетним опытом
              работы в ведущих профильных организациях страны.
            </motion.p>
          </div>
        </div>

        <img src="~/assets/img/aboutPage/team-2.webp" alt="Team img" class="h-100 rounded-xl" />
        <img src="~/assets/img/aboutPage/team-3.webp" alt="Team img" class="h-100 rounded-xl order-1 sm:-order-none" />

        <div class="flex flex-col p-6 bg-black-100 rounded-xl">
          <img src="~/assets/img/logo.webp" alt="Logo img" class="mb-6 w-40 object-cover" />

          <motion.span
            class="text-stone-500"
            :initial="{ opacity: 0, y: 50 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, ease: 'easeOut' }"
            :inViewOptions="{ once: true, amount: 0.3 }"
          >
            Мы непрерывно совершенствуем продукцию, адаптируя её к современным требованиям отрасли и поддерживая высокий
            уровень конкурентоспособности.
          </motion.span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.production-base {
  border-radius: 24px;
  border: 1px solid var(--color-gray-500);
  padding: 80px 100px;
  background-color: var(--color-black-100);
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    padding: 20px;
  }
}
</style>
