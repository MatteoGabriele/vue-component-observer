# vue-component-observer
Plugin for responsive components

### Installation

```bash
yarn add vue-component-observer
```

### Usage

Global install the component

```js
import VueComponentObserver from 'vue-component-observer'

Vue.use(VueComponentObserver)
```

Declare the component breakpoints in the root of the component itself and then use the `$eq` property to render these computations.

```html
<template>
  <div :class="componentClasses">
    Lorem ipsum dolor sit amet consectetur.
  </div>
</template>

<script>
import classnames from 'classnames'

export default {
  name: 'MyComponent',

  breakpoints: {
    medium: cx => cx.width < 800,
    small: cx => cx.width < 500
  },

  computed: {
    componentClasses () {
      return classnames(this.$style.component, {
        [this.$style.medium]: this.$eq.medium,
        [this.$style.small]: this.$eq.small
      })
    }
  }
}
</script>

<style module>
  .component {
    border: 1px solid red;
    padding: 20px;
  }

  .medium {
    border-color: green;
  }

  .small {
    border-color: blue;
  }
</style>
```

This example is made with CSS-Modules but it is possible to use any type of pre-processors.

### Local install
It's possible to use the mixin just for the component you need, instead of globally.

```js
import { VueComponentObserver } from 'vue-component-obserber'

export default {
  name: 'MyComponent',
  mixins: [VueComponentObserver]
}
```
