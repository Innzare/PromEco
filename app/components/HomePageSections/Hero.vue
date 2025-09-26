<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper/modules';

import slider1 from '~/assets/img/homePage/slider-1.webp';
import slider2 from '~/assets/img/homePage/slider-2.webp';
import slider3 from '~/assets/img/homePage/slider-3.webp';

import 'swiper/css';
import 'swiper/css/effect-fade';

const SLIDES = [
  {
    index: 0,
    image: slider1,
    title: 'Эффективность в каждой молекуле',
    subtitle:
      'Мы занимаемся разработкой, производством и реализацией топливных и масляных присадок, деэмульгаторов, ингибиторов коррозии, реагентов, полимерных добавок и других актуальных продуктов в нефтехимии'
  },
  {
    index: 1,
    image: slider2,
    title: 'Широкий ассортимент продукции',
    subtitle:
      'Производство нефтехимической продукции на основе высококачественного сырья из России и дружественных стран'
  },
  {
    index: 2,
    image: slider3,
    title: 'Научно-исследовательская лаборатория',
    subtitle:
      'Высококвалифицированный персонал занимается над разработкой инновационных востребованных продуктов в нефтехимии'
  }
];

const { width } = useWindowSize();

let mySwiper: any = null;
const activeIndex = ref(0);
const progress = ref<number[]>(SLIDES.map(() => 0));

const onSwiper = (swiper: any) => {
  mySwiper = swiper;
};

function goSlide(index: number) {
  mySwiper?.slideTo(index);
  activeIndex.value = index;
  resetProgress();
}

function goNext() {
  mySwiper?.slideNext();
  activeIndex.value = mySwiper.realIndex;
  resetProgress();
}

function goPrev() {
  mySwiper?.slidePrev();
  activeIndex.value = mySwiper.realIndex;
  resetProgress();
}

function onSlideChange(swiper: any) {
  activeIndex.value = swiper.realIndex;
  resetProgress();
}

function onAutoplayTimeLeft(swiper: any, time: number, progressValue: number) {
  progress.value = progress.value.map((p, i) =>
    i === swiper.realIndex ? (1 - progressValue) * 100 : i < swiper.realIndex ? 100 : 0
  );
}

function resetProgress() {
  progress.value = progress.value.map((p, i) => (i < activeIndex.value ? 100 : i === activeIndex.value ? 0 : 0));
}
</script>

<template>
  <swiper
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="relative"
    :slides-per-view="1"
    :effect="'fade'"
    :fade-effect="{ crossFade: true }"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="[EffectFade, Autoplay]"
    loop
  >
    <swiper-slide v-for="slide in SLIDES" :key="slide.title">
      <div class="slide" :style="{ backgroundImage: `url(${slide.image})` }"></div>
    </swiper-slide>

    <div class="overlay">
      <div class="overlay-text">
        <h1 class="text-2xl md:text-5xl text-red-100 text-left mb-2 md:mb-6">{{ SLIDES[activeIndex]?.title }}</h1>
        <p class="text-sm md:text-lg text-left text-stone-500">{{ SLIDES[activeIndex]?.subtitle }}</p>
      </div>

      <ClientOnly>
        <div class="flex flex-col md:flex-row gap-2 md:gap-4 mt-12 md:mt-8">
          <Button :size="width <= 768 ? 'small' : 'medium'">
            <div class="flex items-center gap-4">
              Подробнее
              <Icon name="i-lucide-arrow-big-right" size="24px" />
            </div>
          </Button>

          <Button variant="secondary" :size="width <= 768 ? 'small' : 'medium'">Скачать презентацию</Button>
        </div>
      </ClientOnly>
    </div>

    <!-- Кастомная пагинация -->
    <div class="absolute left-[50%] z-10 bottom-10 -translate-x-[50%] flex gap-4 items-center mt-4">
      <Button @click="goPrev" size="small" variant="ghost" icon>
        <Icon name="i-lucide-arrow-left" size="24px" />
      </Button>

      <div class="flex items-center gap-2">
        <div
          v-for="(slide, i) in SLIDES"
          :key="i"
          @click="goSlide(slide.index)"
          :class="[
            'relative h-1 bg-gray-400 rounded overflow-hidden transition-all cursor-pointer',
            i === activeIndex ? 'w-36' : 'w-6'
          ]"
        >
          <!-- Заполнение прогресс-бара -->
          <div
            v-if="i === activeIndex"
            class="absolute left-0 top-0 h-full bg-red-700 transition-[width] duration-100"
            :style="{ width: progress[activeIndex] + '%' }"
          ></div>
        </div>
      </div>

      <Button @click="goNext" size="small" variant="ghost" icon>
        <Icon name="i-lucide-arrow-right" size="24px" />
      </Button>
    </div>
  </swiper>
</template>

<style scoped lang="scss">
.slider-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  width: 100%;
}

.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 700px;
  width: 100%;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 500px;
  }
}

.overlay {
  max-width: 800px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  z-index: 10000;

  @media (max-width: 768px) {
    right: 20px;
    left: 20px;
  }

  &-text {
    height: 200px;

    @media (max-width: 768px) {
      height: 150px;
    }
  }
}
</style>
