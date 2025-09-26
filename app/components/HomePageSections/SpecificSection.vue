<script lang="ts" setup>
import { motion } from 'motion-v';
import specific1 from '~/assets/img/homePage/specific-1.webp';
import specific2 from '~/assets/img/homePage/specific-2.webp';
import specific3 from '~/assets/img/homePage/specific-3.webp';
import specific4 from '~/assets/img/homePage/specific-4.webp';

const LIST: any = ref([
  {
    digit: 'first',
    title: 'Разработка',
    text: 'Разработка и совершенствование продукции в собственной научно-исследовательской лаборатории',
    img: specific1,
    isHovered: true
  },
  {
    digit: 'second',
    title: 'Сертификация',
    text: 'Сертификация продукции в отраслевых центрах',
    img: specific2,
    isHovered: false
  },
  {
    digit: 'third',
    title: 'Производство',
    text: 'Выпуск продукции на собственной производственной площадке в России',
    img: specific3,
    isHovered: false
  },
  {
    digit: 'four',
    title: 'Поддержка',
    text: 'Сопровождение и консультация клиентов по внедрению присадок и реагентов на предприятиях',
    img: specific4,
    isHovered: false
  }
]);

const { width } = useWindowSize();

const isTablet = computed(() => width.value <= 768);

const currentBg = ref(LIST.value[0].img);
const setBg = (bg: string, currentItemIndex: number) => {
  currentBg.value = bg;

  LIST.value = LIST.value.map((item: any, index: any) => {
    return {
      ...item,
      isHovered: currentItemIndex === index
    };
  });
};
</script>

<template>
  <section class="specific">
    <div class="container">
      <div class="text-left py-20">
        <h3 class="text-3xl mb-4">Технологический контур компании</h3>

        <p class="text-stone-500">
          От исследований до внедрения — мы охватываем весь цикл работы с нефтехимической продукцией
        </p>
      </div>
    </div>

    <div
      class="list-wrapper"
      :style="{
        background: `linear-gradient(0deg, #0c0c0cd8, #0c0c0ccc), center / cover no-repeat url(${currentBg})`
      }"
    >
      <ClientOnly>
        <div
          :class="['list-item', { 'list-item--active': item.isHovered }]"
          v-for="(item, index) in LIST"
          :key="item.title"
          @mouseenter="setBg(item.img, index)"
          :style="{
            backgroundImage: isTablet ? `linear-gradient(0deg, #0c0c0cd8, #0c0c0ccc), url(${item.img})` : 'none'
          }"
        >
          <motion.div
            class="list-item__text"
            :initial="{ opacity: 0, y: 50 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, ease: 'easeInOut' }"
            :inViewOptions="{ once: true, amount: 0.3 }"
          >
            <div class="flex flex-col">
              <DigitIcon :type="item.digit" size="lg" />

              <p class="text-2xl mb-6">
                {{ item.title }}
              </p>

              <p class="list-item__subtitle">
                {{ item.text }}
              </p>
            </div>

            <Button class="list-item__button" variant="light" size="small" block>
              <div class="flex items-center gap-2">
                Подробнее
                <Icon name="i-lucide-arrow-right" />
              </div>
            </Button>
          </motion.div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped lang="scss">
.list-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  height: 540px;
  width: 100%;
  transition: all 0.3s ease;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    height: auto;
    background-image: none;
  }

  .list-item {
    text-align: left;
    list-style: none;
    padding: 20px;
    transition: 0.3s ease;
    overflow: hidden;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      padding: 40px 20px;
    }

    &__text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__subtitle {
      opacity: 0;

      @media (max-width: 768px) {
        opacity: 1;
        margin-bottom: 100px;
      }
    }

    &__button {
      opacity: 0;

      @media (max-width: 768px) {
        opacity: 1;
      }
    }

    &:last-child {
      border-right: 0;
    }

    &--active {
      background-color: var(--color-red);

      .list-item__subtitle {
        opacity: 1;
      }

      .list-item__button {
        opacity: 1;
      }

      @media (max-width: 768px) {
        background-color: transparent;
      }
    }
  }
}
</style>
