<script setup>
import { onMounted, onUnmounted, reactive, ref, computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  breakpoints: {
    type: [Array, Object],
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
  if (Array.isArray(props.breakpoints)) {
    return props.breakpoints.reduce((coll, [breakpoint, className]) => {
      coll[className] = sizes.width > breakpoint;
      return coll;
    }, {});
  }

  return Object.keys(props.breakpoints).reduce((coll, breakpoint) => {
    coll[breakpoint] = sizes.width > props.breakpoints[breakpoint];
    return coll;
  }, {});
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
