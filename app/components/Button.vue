<script lang="ts" setup>
interface Props {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'light' | 'ghost';
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  block?: boolean;
  icon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  variant: 'primary',
  type: 'button',
  loading: false,
  disabled: false,
  active: false,
  block: false,
  icon: false
});

const classes = computed(() => {
  return {
    button: true,
    active: props.active,
    block: props.block,
    icon: props.icon,
    [props.variant]: true,
    [props.size]: true
  };
});
</script>

<template>
  <button :type="type" :class="classes" :disabled="disabled || loading">
    <div class="loader" v-if="loading"></div>
    <slot v-else></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-sm);
  color: var(--color-white);
  // font-size: 1.5rem;
  transition: background-color 0.15s;
  width: fit-content;
  cursor: pointer;

  .loader {
    width: 20px;
    height: 20px;
    padding: 2px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #1b1b1b;
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }

  &.block {
    width: 100%;
  }

  &.icon {
    border-radius: 100%;
    padding: 8px;
  }

  &.primary {
    background-color: var(--color-red);

    &:active {
      background-color: var(--color-red-100);
    }
  }

  &.secondary {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(9px);

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &.light {
    background-color: var(--color-white);
    color: var(--color-black-100);

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  &.ghost {
    background-color: transparent;

    &:hover {
      background-color: var(--color-black-50);
    }

    &:active {
      background-color: var(--color-black);
    }

    &.active {
      background-color: var(--color-black-50);
    }
  }

  &.large {
    height: var(--button-lg-height);
    font-size: var(--button-lg-size);
  }

  &.medium {
    height: var(--button-md-height);
    font-size: var(--button-md-size);
  }

  &.small {
    height: var(--button-sm-height);
    font-size: var(--button-sm-size);
  }

  // &.secondary {
  //   background-color: var(--color-secondary);
  //   color: white;

  //   &:hover {
  //     background-color: darken(var(--color-secondary), 10%);
  //   }
  // }

  // &.tertiary {
  //   background-color: var(--color-tertiary);
  //   color: white;

  //   &:hover {
  //     background-color: darken(var(--color-tertiary), 10%);
  //   }
  // }

  // &.small {
  //   font-size: 0.75rem;
  //   padding: 0.25rem 0.5rem;
  // }

  // &.large {
  //   font-size: 1.25rem;
  //   padding: 0.75rem 1.5rem;
  // }

  &:disabled {
    background-color: var(--color-gray-400);
    cursor: not-allowed;

    &:hover {
      background-color: var(--color-gray-400);
    }
  }
}
</style>
