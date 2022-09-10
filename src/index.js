import ObserverMixin from "./mixin";
import Observer from "./Observer.vue";

export default (Vue) => {
  Vue.mixin(ObserverMixin);
  Vue.component("Observer", Observer);
};

export { Observer, ObserverMixin };
