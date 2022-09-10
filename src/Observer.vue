<script>
export default {
  name: "Observer",

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

  data() {
    return {
      observer: null,
      sizes: { width: 0, height: 0 },
    };
  },

  computed: {
    eq() {
      return Object.keys(this.breakpoints).reduce((coll, breakpoint) => {
        const value = this.breakpoints[breakpoint];

        coll[breakpoint] = Object.keys(value).some((key) =>
          this.checkMediaCondition(key, value[key])
        );

        return coll;
      }, {});
    },
  },

  created() {
    this.observer = new ResizeObserver(this.handleResize);
  },

  mounted() {
    this.observer?.observe(this.$el);
  },

  destroyed() {
    this.observer?.disconnect();
  },

  methods: {
    handleResize(entries) {
      const { width, height } = entries[0].contentRect;
      this.sizes = { width, height };
    },

    checkMediaCondition(type, value) {
      switch (type) {
        case "minWidth":
          return this.sizes.width >= value;
        case "maxWidth":
          return this.sizes.width <= value;
        case "minHeight":
          return this.sizes.height >= value;
        case "maxHeight":
          return this.sizes.height <= value;
      }

      return false;
    },
  },
};
</script>

<template>
  <slot v-if="slim" :eq="eq" />
  <component :is="tag" v-else>
    <slot :eq="eq" />
  </component>
</template>
