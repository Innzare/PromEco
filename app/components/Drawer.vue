<script lang="ts" setup>
import { NAV } from '~/constants/common';

const route = useRoute();

const emit = defineEmits(['close']);
const props = withDefaults(
  defineProps<{
    isOpen: boolean;
  }>(),
  {
    isOpen: false
  }
);
</script>

<template>
  <div class="drawer-overlay" @click="emit('close')" v-show="isOpen"></div>
  <div :class="['drawer', { open: isOpen }]">
    <NuxtLink class="logo" to="/" @click="emit('close')">
      <img src="~/assets/img/logo.webp" alt="logo" />
    </NuxtLink>

    <ul class="links">
      <li v-for="item in NAV" :key="item.path">
        <NuxtLink :to="item.path">
          <Button block variant="ghost" size="small" :active="route.name === item.name" @click="emit('close')">
            <div :class="['link-text', { active: route.name === item.name }]">
              <Icon :name="item.icon" size="18px" />
              {{ item.text }}
            </div>
          </Button>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .link-text {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;

    &.active {
      color: var(--color-red);
    }
  }
}

.drawer {
  position: fixed;
  top: 50%;
  right: 20px;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  height: 90dvh;
  transition: transform 0.3s ease-in-out;
  transform: translate(120%, -50%);
  background-color: #414141;
  z-index: 1001;

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  &.open {
    transform: translate(0, -50%);
  }
}
</style>
