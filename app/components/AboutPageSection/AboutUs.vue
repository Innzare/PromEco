<script setup>
import { motion } from 'motion-v';
</script>

<template>
  <div class="container">
    <section class="about-us">
      <div class="background-section"></div>

      <div class="about-us__text">
        <div class="flex flex-col md:flex-row p-5 md:p-20">
          <motion.h2
            :initial="{ opacity: 0, x: -50 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 1, ease: 'easeOut' }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            class="text-3xl md:text-5xl flex-1 text-left mb-6 md:mb-0"
          >
            О нас
          </motion.h2>

          <div class="text-stone-500 flex-1 text-left">
            <motion.p
              :initial="{ opacity: 0, x: -50 }"
              :whileInView="{ opacity: 1, x: 0 }"
              :transition="{ duration: 1, ease: 'easeOut' }"
              :inViewOptions="{ once: true, amount: 0.3 }"
              class="mb-4"
            >
              ПромЭко — российская компания, основанная в 2006 году и специализирующаяся на разработке, производстве
              и поставке продукции для нефтегазоперерабатывающей, нефтехимической и химической промышленностей.
            </motion.p>

            <motion.p
              :initial="{ opacity: 0, x: -50 }"
              :whileInView="{ opacity: 1, x: 0 }"
              :transition="{ duration: 1.2, ease: 'easeOut' }"
              :inViewOptions="{ once: true, amount: 0.3 }"
            >
              Компания предлагает широкий ассортимент продукции, охватывающий ключевые направления отрасли. Наличие
              собственной научно-исследовательской лаборатории позволяет нам разрабатывать инновационные решения,
              эффективно замещающие импортные аналоги и обеспечивающие устойчивость поставок нашим клиентам.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-us {
  border-radius: 24px;
  overflow: hidden;
  margin-top: 40px;
  background-color: var(--color-black-50);
  margin-bottom: 80px;
  border: 1px solid var(--color-gray-500);

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  .background-section {
    background: url('~/assets/img/aboutPage/factory.webp') no-repeat center;
    background-size: cover;
    height: 450px;

    @media (max-width: 768px) {
      height: 360px;
    }
  }
}
</style>
