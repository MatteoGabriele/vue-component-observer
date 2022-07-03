<script setup>
import { onMounted, onUnmounted, reactive, ref, computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  breakpoints: {
    type: Array,
    validator(props) {
      return props.every(([breakpoint, className]) => {
        return typeof breakpoint === "number" && typeof className === "string";
      });
    },
  },
});

const root = ref(null);
const sizes = reactive({ width: 0, height: 0 });

const observer = new ResizeObserver(
  (entries) => {
    const { width, height } = entries[0].contentRect;

    sizes.width = width;
    sizes.height = height;
  },
  {
    box: "border-box",
  }
);

const classes = computed(() => {
  return props.breakpoints.map(([breakpoint, className]) => {
    return {
      [className]: sizes.width > breakpoint,
    };
  });
});

onMounted(() => {
  observer.observe(root.value);
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<template>
  <component :is="tag" ref="root" :class="classes">
    <slot :classes="classes" :width="sizes.width" />
  </component>
</template>
