# vue-component-observer

Plugin for responsive components

### Installation

```bash
yarn add vue-component-observer
```

### Usage

```js
import VueComponentObserver from "vue-component-observer";

Vue.use(VueComponentObserver);
```

Declare the component breakpoints in the root of the component itself and then use the `$eq` property to render these computations.

```vue
<template>
  <div>
    <p v-if="$eq.medium">medium</p>
    <p v-else>small</p>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  
  breakpoints: {
    medium: {
      minWidth: 600,
    },
    large: {
      minWidth: 1200,
    },
  },
};
</script>
```

### Use Observer component

Use the built-in Observer component

```vue
<template>
  <div>
    <Observer :breakpoints="breakpoints" v-slot="{ eq }">
      <p v-if="eq.medium">medium</p>
      <p v-else>small</p>
    </Observer>
  </div>
</template>

<script setup>
const breakpoints = {
  medium: {
    minWidth: 600,
  },
};
</script>
```

#### Props list

##### tag
What tag the Observer component should render

default: 'div'

##### slim
Render or not a node element

default: false


##### breakpoints
Observer breakpoints. Supports: minWidth, maxWidth, minHeight and maxHeight 

default: null


### Local usage

```vue
<template>
  <div>
    <Observer :breakpoints="breakpoints" v-slot="{ eq }">
      <p v-if="eq.medium">medium</p>
      <p v-else>small</p>
    </Observer>
  </div>
</template>

<script setup>
import { Observer } from "vue-component-observer";

const breakpoints = {
  medium: {
    minWidth: 600,
  },
};
</script>
```

```vue
<template>
  <div>
    <p v-if="$eq.medium">medium</p>
    <p v-else>small</p>
  </div>
</template>

<script>
import { ObserverMixin } from "vue-component-observer";

export default {
  name: "MyComponent",

  mixins: [ObserverMixin],

  breakpoints: {
    medium: {
      minWidth: 600,
    },
    large: {
      minWidth: 1200,
    },
  },
};
</script>
```
