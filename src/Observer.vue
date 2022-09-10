<script>
import mixin from "./mixin";

export default {
  name: "Observer",

  mixins: [mixin],

  props: {
    breakpoints: Object,
    tag: {
      type: String,
      default: "div",
    },
    slim: {
      type: Boolean,
      default: false,
    },
  },

  breakpoints: ({ breakpoints }) => breakpoints,
};
</script>

<template>
  <slot v-if="slim" :eq="$eq" />
  <component :is="tag" v-else>
    <slot :eq="$eq" />
  </component>
</template>
