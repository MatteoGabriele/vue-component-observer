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
      const breakpoints = this.$data.$_vueComponentObserverBreakpoints;

      if (!breakpoints) {
        return {};
      }

      return Object.keys(breakpoints).reduce((coll, breakpoint) => {
        const value = breakpoints[breakpoint];

        coll[breakpoint] = Object.keys(value).some((key) =>
          this.$_checkMediaCondition(key, value[key])
        );

        return coll;
      }, {});
    },
  },

  methods: {
    $_checkMediaCondition(type, value) {
      const sizes = this.$data.$_vueComponentObserverSizes;

      switch (type) {
        case "minWidth":
          return sizes.width >= value;
        case "maxWidth":
          return sizes.width <= value;
        case "minHeight":
          return sizes.height >= value;
        case "maxHeight":
          return sizes.height <= value;
      }

      return false;
    },

    $_createResizeListener() {
      console.log(this.$el);
      const handleResize = (entries) => {
        const { width, height } = entries[0].contentRect;
        this.$data.$_vueComponentObserverSizes = { width, height };
      };

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
