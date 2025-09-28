<script lang="ts" setup>
import { NAV } from '~/constants/common';

const route = useRoute();

const isSidebarOpen = ref(false);

const onNavMenuBtnClick = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <header class="header-wrapper">
    <div class="container">
      <div class="header">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.webp" alt="logo" class="w-[150px] md:w-[200px]" />
        </NuxtLink>

        <nav>
          <ul class="links">
            <li v-for="item in NAV" :key="item.path">
              <NuxtLink :to="item.path">
                <Button variant="ghost" size="small" :active="route.name === item.name">
                  <div :class="['link-text', { active: route.name === item.name }]">
                    {{ item.text }}
                  </div>
                </Button>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <Button @click="onNavMenuBtnClick" class="nav-menu-btn" variant="ghost" size="small" icon>
          <Icon name="i-lucide-text-align-justify" size="24px" />
        </Button>
      </div>
    </div>
  </header>

  <Drawer :isOpen="isSidebarOpen" @close="onNavMenuBtnClick" />
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
}

.header-wrapper {
  background-color: var(--color-black-200);
}

.links {
  display: flex;
  gap: 6px;

  .link-text {
    text-transform: uppercase;
    font-weight: 500;

    &.active {
      color: var(--color-red);
    }
  }

  @media (max-width: 1124px) {
    display: none;
  }
}

.nav-menu-btn {
  display: none;

  @media (max-width: 1124px) {
    display: flex;
  }
}
</style>
