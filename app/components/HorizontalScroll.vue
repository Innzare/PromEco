<script setup lang="ts">
const props = defineProps<{
  direction: 'left' | 'right';
  slides: any[];
}>();
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider">
      <div :class="['slider-track', { scrollRight: direction === 'right', scrollLeft: direction === 'left' }]">
        <div class="slide" v-for="(slide, index) in [...slides, ...slides]" :key="index">
          <img :src="slide" :alt="`Slide ${index + 1}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-wrapper {
  position: relative;
}

.slider-wrapper:before,
.slider-wrapper:after {
  position: absolute;
  content: '';
  top: 0;
  width: 20px;
  height: 100%;
  z-index: 1;
}

.slider-wrapper:before {
  left: 0;
  background-image: linear-gradient(to right, var(--color-black-100), transparent);
}

.slider-wrapper:after {
  right: 0;
  background-image: linear-gradient(to left, var(--color-black-100), transparent);
}

.slider {
  position: relative;
  width: 100%;
  height: calc(var(--slide-height) + 10px);
  overflow: hidden;
}

.slider-track {
  position: absolute;
  top: 0;
  display: flex;
  gap: var(--slide-gap);

  &:hover {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--slide-width);
  height: var(--slide-height);
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: var(--color-white);
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  img {
    display: block;
    // width: 100%;
    // height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }
}

.scrollLeft {
  animation: scrollLeft var(--slide-time) linear infinite;
}

.scrollRight {
  animation: scrollRight var(--slide-time) linear infinite;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--slide-count) * (var(--slide-width) + var(--slide-gap))));
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(calc(-1 * var(--slide-count) * (var(--slide-width) + var(--slide-gap))));
  }

  100% {
    transform: translateX(0);
  }
}
</style>
