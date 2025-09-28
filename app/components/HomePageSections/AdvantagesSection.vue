<script setup>
import { motion } from 'motion-v';
import advantages1 from '~/assets/img/homePage/advantages-1.webp';
import advantages2 from '~/assets/img/homePage/advantages-2.webp';

const ADVANTAGES = [
  {
    title: 'Научно-исследовательская лаборатория',
    text: 'Наша команда состоит из высококвалифицированных специалистов с многолетним опытом в разработке и внедрении эффективных химических решений для индустрии. <br/><br/> В компании работают химики, инженеры и технологи с академическим и прикладным опытом, что позволяет разрабатывать инновационные составы с максимальной эффективностью.',
    icon: 'i-lucide-flask-conical',
    img: null
  },
  {
    title: null,
    text: null,
    icon: null,
    img: advantages1
  },
  {
    title: 'Надёжность',
    text: 'Благодаря многолетнему опыту работы, выстроенным технологиям и строгому контролю качества на всех этапах — от разработки до отгрузки — мы гарантируем надёжную работу нашей продукции в любых условиях эксплуатации.',
    icon: 'i-lucide-cog',
    img: null
  },
  {
    title: 'Техническая консультация специалистов',
    text: 'Мы не просто поставляем продукцию — мы решаем задачи. Подбираем индивидуальные составы под конкретные условия эксплуатации.',
    icon: 'i-lucide-hard-hat',
    img: null
  },
  {
    title: null,
    text: null,
    icon: null,
    img: advantages2
  },
  {
    title: 'Полный цикл: от идеи до производства',
    text: 'Мы самостоятельно разрабатываем, тестируем и производим нефтехимические добавки, реагенты, деэмульгаторы и полимеры, гарантируя высокое качество на каждом этапе.',
    icon: 'i-lucide-atom',
    img: null
  }
];

const ACHIEVEMENTS = [
  {
    title: '20 лет',
    text: 'опыт работы нашей компании',
    icon: 'i-lucide-chart-no-axes-combined'
  },
  {
    title: '20 000 +',
    text: 'реализованной продукции в 2024 году',
    icon: 'i-lucide-barrel'
  },
  {
    title: '10 стран',
    text: 'регион присутствия',
    icon: 'i-lucide-earth'
  },
  {
    title: '50',
    text: 'сотрудников в штате',
    icon: 'i-lucide-user-round'
  }
];
</script>

<template>
  <section class="advantages-wrapper">
    <div class="container">
      <div class="advantages">
        <h2 class="text-3xl md:text-4xl font-bold mb-5 md:mb-20">Наши преимущества</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            v-for="(item, index) in ADVANTAGES"
            :key="index"
            :initial="{ opacity: 0, x: -50 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: 'easeInOut' }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            :class="[
              'bg-neutral-900 p-4 md:p-8 rounded-2xl relative overflow-hidden last:pb-20',
              { 'hidden md:block': item.img }
            ]"
          >
            <template v-if="!item.img">
              <Icon v-if="item.icon" :name="item?.icon" class="text-sky-700 mb-4" size="32px" />

              <p class="text-xl md:text-2xl mb-4">
                {{ item.title }}
              </p>

              <p class="text-sm md:text-base text-stone-500" v-html="item.text"></p>
            </template>

            <img v-else :src="item.img" alt="Advantage img" class="absolute left-0 top-0 h-100" />
          </motion.div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 my-10 md:my-20">
        <motion.div
          v-for="(item, index) in ACHIEVEMENTS"
          :key="index"
          :initial="{ opacity: 0, y: 50 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease: 'easeInOut' }"
          :inViewOptions="{ once: true, amount: 0.3 }"
          class="p-4 md:p-8 bg-neutral-900 rounded-2xl border border-stone-800"
        >
          <div class="drop-shadow-red-700">
            <Icon :name="item.icon" class="text-sky-700 mb-4" size="32px" />
          </div>

          <h3 class="text-2xl md:text-3xl mb-2">{{ item.title }}</h3>
          <p class="text-sm md:text-base text-stone-500">{{ item.text }}</p>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.advantages-wrapper {
  margin-top: 160px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  .advantages {
    padding: 100px;
    border: 1px solid var(--color-gray-500);
    border-radius: 16px;

    @media (max-width: 768px) {
      padding: 40px 0 10px;
      border: 0;
    }
  }
}
</style>
