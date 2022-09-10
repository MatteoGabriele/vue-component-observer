const p = {
  data() {
    return {
      $_vueComponentObserver: null,
      $_vueComponentObserverBreakpoints: null,
      $_vueComponentObserverSizes: { width: 0, height: 0 }
    };
  },
  computed: {
    $eq() {
      const t = this.$data.$_vueComponentObserverBreakpoints;
      return t ? Object.keys(t).reduce((e, s) => {
        const a = t[s];
        return e[s] = Object.keys(a).some(
          (r) => this.$_checkMediaCondition(r, a[r])
        ), e;
      }, {}) : {};
    }
  },
  methods: {
    $_checkMediaCondition(t, e) {
      const s = this.$data.$_vueComponentObserverSizes;
      switch (t) {
        case "minWidth":
          return s.width >= e;
        case "maxWidth":
          return s.width <= e;
        case "minHeight":
          return s.height >= e;
        case "maxHeight":
          return s.height <= e;
      }
      return !1;
    },
    $_createResizeListener() {
      const t = (e) => {
        const { width: s, height: a } = e[0].contentRect;
        this.$data.$_vueComponentObserverSizes = { width: s, height: a };
      };
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
    var e;
    let t;
    typeof ((e = this.$options) == null ? void 0 : e.breakpoints) == "function" ? t = this.$options.breakpoints.bind(this)(this.$props) : t = this.$options.breakpoints, this.$data.$_vueComponentObserverBreakpoints = t, this.$data.$_vueComponentObserverBreakpoints && this.$_createResizeListener();
  }
};
function $(t, e, s, a, r, d, h, v) {
  var n = typeof t == "function" ? t.options : t;
  e && (n.render = e, n.staticRenderFns = s, n._compiled = !0), a && (n.functional = !0), d && (n._scopeId = "data-v-" + d);
  var o;
  if (h ? (o = function(i) {
    i = i || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !i && typeof __VUE_SSR_CONTEXT__ < "u" && (i = __VUE_SSR_CONTEXT__), r && r.call(this, i), i && i._registeredComponents && i._registeredComponents.add(h);
  }, n._ssrRegister = o) : r && (o = v ? function() {
    r.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), o)
    if (n.functional) {
      n._injectStyles = o;
      var c = n.render;
      n.render = function(f, u) {
        return o.call(u), c(f, u);
      };
    } else {
      var _ = n.beforeCreate;
      n.beforeCreate = _ ? [].concat(_, o) : [o];
    }
  return {
    exports: t,
    options: n
  };
}
const l = {
  name: "Observer",
  mixins: [p],
  props: {
    breakpoints: Object,
    tag: {
      type: String,
      default: "div"
    },
    slim: {
      type: Boolean,
      default: !1
    }
  },
  breakpoints: ({ breakpoints: t }) => t
};
var m = function() {
  var e = this, s = e._self._c;
  return e.slim ? e._t("default", null, { eq: e.$eq }) : s(e.tag, { tag: "component" }, [e._t("default", null, { eq: e.$eq })], 2);
}, b = [], C = /* @__PURE__ */ $(
  l,
  m,
  b,
  !1,
  null,
  null,
  null,
  null
);
const O = C.exports, k = (t) => {
  t.mixin(p), t.component("Observer", O);
};
export {
  O as Observer,
  p as ObserverMixin,
  k as default
};
