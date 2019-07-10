import mixin from './mixin'

export default function install (Vue) {
  Vue.mixin(mixin)
}

export const VueComponentObserver = mixin
