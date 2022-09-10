const r = {
  data() {
    return {
      $_vueComponentObserver: null,
      $_vueComponentObserverBreakpoints: null,
      $_vueComponentObserverSizes: { width: 0, height: 0 }
    };
  },
  computed: {
    $eq() {
      const e = this.$data.$_vueComponentObserverBreakpoints;
      return e ? Object.keys(e).reduce((t, s) => {
        const n = e[s];
        return t[s] = Object.keys(n).some(
          (i) => this.$_checkMediaCondition(i, n[i])
        ), t;
      }, {}) : {};
    }
  },
  methods: {
    $_checkMediaCondition(e, t) {
      const s = this.$data.$_vueComponentObserverSizes;
      switch (e) {
        case "minWidth":
          return s.width >= t;
        case "maxWidth":
          return s.width <= t;
        case "minHeight":
          return s.height >= t;
        case "maxHeight":
          return s.height <= t;
      }
      return !1;
    },
    $_createResizeListener() {
      console.log(this.$el);
      const e = (t) => {
        const { width: s, height: n } = t[0].contentRect;
        this.$data.$_vueComponentObserverSizes = { width: s, height: n };
      };
      this.$data.$_vueComponentObserver = new ResizeObserver(e), this.$data.$_vueComponentObserver.observe(this.$el);
    },
    $_destroyResizeListener() {
      this.$data.$_vueComponentObserver && this.$data.$_vueComponentObserver.disconnect();
    }
  },
  destroyed() {
    this.$_destroyResizeListener();
  },
  mounted() {
    this.$data.$_vueComponentObserverBreakpoints = this.$options.breakpoints, this.$data.$_vueComponentObserverBreakpoints && this.$_createResizeListener();
  }
}, o = (e) => {
  e.mixin(r);
};
export {
  r as ObserverMixin,
  o as default
};
