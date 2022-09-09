var d = f;
function f(t, r, n) {
  var e = null, s = null, i = n && n.leading, a = n && n.trailing;
  i == null && (i = !0), a == null && (a = !i), i == !0 && (a = !1);
  var l = function() {
    e && (clearTimeout(e), e = null);
  }, c = function() {
    var o = s;
    l(), o && o();
  }, u = function() {
    var o = i && !e, h = this, $ = arguments;
    if (s = function() {
      return t.apply(h, $);
    }, e || (e = setTimeout(function() {
      if (e = null, a)
        return s();
    }, r)), o)
      return o = !1, s();
  };
  return u.cancel = l, u.flush = c, u;
}
const v = {
  data() {
    return {
      $_vueComponentObserver: null,
      $_vueComponentObserverBreakpoints: null,
      $_vueComponentObserverSizes: { width: 0, height: 0 }
    };
  },
  computed: {
    $eq() {
      const t = {}, r = this.$data.$_vueComponentObserverBreakpoints, n = this.$data.$_vueComponentObserverSizes;
      for (const e in r) {
        const s = r[e](n);
        t[e] = s;
      }
      return t;
    }
  },
  methods: {
    $_createResizeListener() {
      const t = d((r) => {
        const { width: n, height: e } = r[0].contentRect;
        this.$data.$_vueComponentObserverSizes = { width: n, height: e };
      }, 200);
      this.$data.$_vueComponentObserver = new ResizeObserver(t), this.$data.$_vueComponentObserver.observe(this.$el);
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
};
function p(t) {
  t.mixin(v);
}
const m = v;
export {
  m as VueComponentObserver,
  p as default
};
