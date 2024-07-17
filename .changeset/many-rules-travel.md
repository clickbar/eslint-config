---
'@clickbar/eslint-config-vue': minor
---

Add more vue rules for best practices & type safety

The biggest impact will probably be the following rules:

`vue/require-explicit-slots` and `vue/v-bind-style`.

Bind style just requires to use the new shorthand syntax when possible and is auto-fixable.

Explicit slots needs some manual fixing, but provides types for slot properties and is highly recommended:

E.g. define slots like this:
```vue
<template>
  <div>
    <!-- ✓ GOOD -->
    <slot />
    <slot name="foo" />
    <!-- ✗ BAD -->
    <slot name="bar" />
  </div>
</template>
<script setup lang="ts">
defineSlots<{
  default(props: { msg: string }): any
  foo(props: { msg: string }): any
}>()
</script>
```

