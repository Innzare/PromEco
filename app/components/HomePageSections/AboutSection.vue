<script lang="ts" setup>
import { motion } from 'motion-v';

const { width } = useWindowSize();

const isTablet = computed(() => width.value <= 768);
</script>

<template>
  <section class="about">
    <div class="container">
      <div class="w-100 md:w-2/3">
        <motion.p
          :initial="{ opacity: 0, y: 50 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          :inViewOptions="{ once: true, amount: 0.3 }"
          class="mb-4 text-xl md:text-3xl"
        >
          <span class="text-sky-700"> ПромЭко </span>  — это многопрофильная компания, устойчиво развивающаяся
          <span class="text-sky-700"> с 2006 года </span>
          и активно наращивающая производственные ресурсы и технологическую базу.
        </motion.p>

        <motion.p
          :initial="{ opacity: 0, y: 50 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          :inViewOptions="{ once: true, amount: 0.3 }"
          class="text-sm md:text-base mb-8 text-stone-400"
        >
          Наша специализация — разработка, производство и поставка химических продуктов для предприятий
          нефтегазоперерабатывающей, нефтехимической и химической промышленностей.
        </motion.p>

        <ClientOnly>
          <Button variant="secondary" :size="isTablet ? 'small' : 'medium'">
            <div class="flex items-center gap-2">
              О компании
              <Icon name="i-lucide-arrow-right" class="bg-sky-700" variant="ghost" size="20px" />
            </div>
          </Button>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(0deg, #0c0c0cd8, #0c0c0ccc),
    linear-gradient(114.4deg, #000000 3.47%, rgba(0, 0, 0, 0) 66.87%),
    url('~/assets/img/homePage/factory.webp') no-repeat center;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: local;
    height: auto;
    padding: 80px 0;
  }

  @media (max-width: 425px) {
    padding: 40px 0;
  }
}
</style>
