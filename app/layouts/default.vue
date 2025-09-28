<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.main {
  flex: 1;
}
</style>
