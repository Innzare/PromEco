// src/composables/useWindowSize.ts
import { ref, onMounted, onUnmounted } from 'vue';

// interface WindowSizeOptions {
//   debounceDelay?: number;
// }

export function useWindowSize(options) {
  const { debounceDelay = 100 } = options || {};

  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0);
  const height = ref(typeof window !== 'undefined' ? window.innerHeight : 0);

  let timeoutId = null;

  function handleResize() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
      timeoutId = null;
    }, debounceDelay);
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
  });

  return { width, height };
}
