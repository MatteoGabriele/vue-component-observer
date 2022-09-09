import throttle from "just-throttle";

export default {
  data() {
    return {
      $_vueComponentObserver: null,
      $_vueComponentObserverBreakpoints: null,
      $_vueComponentObserverSizes: { width: 0, height: 0 },
    };
  },

  computed: {
    $eq() {
      const steps = {};
      const breakpoints = this.$data.$_vueComponentObserverBreakpoints;
      const sizes = this.$data.$_vueComponentObserverSizes;

      for (const key in breakpoints) {
        const value = breakpoints[key](sizes);
        steps[key] = value;
      }

      return steps;
    },
  },

  methods: {
    $_createResizeListener() {
      const handleResize = throttle((entries) => {
        const { width, height } = entries[0].contentRect;
        this.$data.$_vueComponentObserverSizes = { width, height };
      }, 200);

      this.$data.$_vueComponentObserver = new ResizeObserver(handleResize);
      this.$data.$_vueComponentObserver.observe(this.$el);
    },

    $_destroyResizeListener() {
      if (this.$data.$_vueComponentObserver) {
        this.$data.$_vueComponentObserver.disconnect();
      }
    },
  },

  destroyed() {
    this.$_destroyResizeListener();
  },

  mounted() {
    this.$data.$_vueComponentObserverBreakpoints = this.$options.breakpoints;

    if (this.$data.$_vueComponentObserverBreakpoints) {
      this.$_createResizeListener();
    }
  },
};
