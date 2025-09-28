<script setup>
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import productSlide1 from '~/assets/img/homePage/product-slide-1.webp';
import productSlide2 from '~/assets/img/homePage/product-slide-2.webp';
import productSlide3 from '~/assets/img/homePage/product-slide-3.webp';
import productSlide4 from '~/assets/img/homePage/product-slide-4.webp';
import productSlide5 from '~/assets/img/homePage/product-slide-5.webp';

const { width } = useWindowSize();
const isTablet = computed(() => width.value <= 768);

let mySwiper = null;
const activeIndex = ref(0);

const onSwiper = (swiper) => {
  mySwiper = swiper;
};
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};

function goNext() {
  mySwiper?.slideNext();
  activeIndex.value = mySwiper.realIndex;
}

function goPrev() {
  mySwiper?.slidePrev();
  activeIndex.value = mySwiper.realIndex;
}

const SLIDES = [
  {
    text: 'Присадки для топлив',
    img: productSlide1
  },
  {
    text: 'Полимерные добавки',
    img: productSlide4
  },
  {
    text: 'Крупнотоннажная химия',
    img: productSlide5
  },
  {
    text: 'Присадки для смазочных материалов',
    img: productSlide2
  },
  {
    text: 'Реагенты',
    img: productSlide3
  },
  {
    text: 'Присадки для топлив',
    img: productSlide1
  },
  {
    text: 'Полимерные добавки',
    img: productSlide4
  },
  {
    text: 'Крупнотоннажная химия',
    img: productSlide5
  },
  {
    text: 'Присадки для смазочных материалов',
    img: productSlide2
  },
  {
    text: 'Реагенты',
    img: productSlide3
  }
];
</script>

<template>
  <section
    class="products"
    :style="{
      background: `linear-gradient(0deg, #0c0c0cd8, #0c0c0ccc), center / cover no-repeat url(${SLIDES[activeIndex].img})`
    }"
  >
    <h2 class="text-center text-2xl md:text-5xl mb-4">Продукция ПромЭко</h2>

    <p class="text-center text-stone-400 text-base md:text-xl mb-10 md:mb-20">
      Компания предлагает широкий ассортимент продукции, охватывающий ключевые направления отрасли
    </p>

    <div class="slider">
      <ClientOnly>
        <swiper
          class="my-swiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="[EffectCoverflow]"
          :effect="'coverflow'"
          :coverflowEffect="{
            rotate: 0,
            stretch: 35,
            depth: 350,
            modifier: 1,
            slideShadows: true
          }"
          :slides-per-view="isTablet ? 1 : 2"
          :space-between="50"
          centeredSlides
          loop
        >
          <swiper-slide v-for="(slide, index) in SLIDES" :key="index">
            <div class="slide" :style="{ background: `center / cover no-repeat url(${slide.img})` }"></div>
          </swiper-slide>
        </swiper>
      </ClientOnly>

      <p class="text-2xl md:text-3xl text-center font-bold tracking-wide text-sky-700 mt-5 md:mt-10">
        {{ SLIDES[activeIndex].text }}
      </p>

      <div class="flex justify-center items-center gap-4 mt-2 md:mt-5">
        <Button @click="goPrev" size="small" variant="ghost" icon>
          <Icon name="i-lucide-arrow-left" size="24px" />
        </Button>

        <Button @click="goNext" size="small" variant="ghost" icon>
          <Icon name="i-lucide-arrow-right" size="24px" />
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  padding-block: 140px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding-block: 40px;
  }
}

.slide {
  padding: 20px;
  background-color: #ccc;
  border-radius: 30px;
  height: 410px;

  @media (max-width: 768px) {
    height: 300px;
  }
}

.my-swiper .swiper-slide {
  filter: grayscale(100%);
  transition: all 0.3s;

  @media (max-width: 768px) {
    padding-inline: 20px;
  }
}

.my-swiper .swiper-slide-active {
  filter: none;
}
</style>
