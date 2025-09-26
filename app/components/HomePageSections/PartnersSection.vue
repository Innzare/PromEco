<script setup>
import partnerSlide1 from '~/assets/img/homePage/partner-slide-1.webp';
import partnerSlide2 from '~/assets/img/homePage/partner-slide-2.webp';
import partnerSlide3 from '~/assets/img/homePage/partner-slide-3.webp';
import partnerSlide4 from '~/assets/img/homePage/partner-slide-4.webp';
import partnerSlide5 from '~/assets/img/homePage/partner-slide-5.webp';

const SLIDES = [partnerSlide1, partnerSlide2, partnerSlide3, partnerSlide4, partnerSlide5];
</script>

<template>
  <div class="text-left">
    <div class="container">
      <h2 class="text-3xl mb-4">Наши клиенты и партнёры в отрасли</h2>

      <p class="text-stone-700 mb-16">
        Мы сотрудничаем с ведущими компаниями нефтегазового сектора, обеспечивая стабильное качество, точность поставок
        и техническую поддержку.
      </p>
    </div>

    <HorizontalScroll class="mb-20" :slides="SLIDES" direction="right" />
  </div>
</template>

<style lang="scss" scoped>
.partners {
  margin-bottom: 100px;
}
</style>
