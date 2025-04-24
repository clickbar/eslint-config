# @clickbar/eslint-config-vue

## 11.0.4

### Patch Changes

- 6141191: Fix: Add vue-eslint-parser as a dependency

## 11.0.3

### Patch Changes

- 0deb45f: Update dependencies
- 8272787: Update Vue plugin, unicorn plugin & import resolver
- Updated dependencies [0deb45f]
- Updated dependencies [8272787]
  - @clickbar/eslint-config-typescript@12.0.3

## 11.0.2

### Patch Changes

- @clickbar/eslint-config-typescript@12.0.2

## 11.0.1

### Patch Changes

- @clickbar/eslint-config-typescript@12.0.1

## 11.0.0

### Major Changes

- efa817f: Remove Prettier as Peer Dependency

  Please use @clickbar/style-guide for prettier settings and plugins.

### Patch Changes

- Updated dependencies [efa817f]
  - @clickbar/eslint-config-typescript@12.0.0

## 10.3.0

### Minor Changes

- a206f16: Update Unicorn Plugin to v57

### Patch Changes

- 89b3897: Update dependencies
- Updated dependencies [a206f16]
- Updated dependencies [89b3897]
  - @clickbar/eslint-config-typescript@11.1.0

## 10.2.5

### Patch Changes

- Updated dependencies [cc773d1]
  - @clickbar/eslint-config-typescript@11.0.15

## 10.2.4

### Patch Changes

- 3ef4ba5: Update dependencies
- Updated dependencies [3ef4ba5]
  - @clickbar/eslint-config-typescript@11.0.14

## 10.2.3

### Patch Changes

- e6cd8fe: Update dependencies
- Updated dependencies [e6cd8fe]
  - @clickbar/eslint-config-typescript@11.0.13

## 10.2.2

### Patch Changes

- 3181315: Update dependencies & support TS 5.7
- Updated dependencies [3181315]
  - @clickbar/eslint-config-typescript@11.0.12

## 10.2.1

### Patch Changes

- 101101d: Update dependencies
- Updated dependencies [101101d]
  - @clickbar/eslint-config-typescript@11.0.11

## 10.2.0

### Minor Changes

- 70d72ed: Enable prefer-use-template-ref rule

### Patch Changes

- d443140: Update eslint-plugin-unicorn to v56
- 402ba36: Update dependencies
- Updated dependencies [d443140]
- Updated dependencies [402ba36]
  - @clickbar/eslint-config-typescript@11.0.10

## 10.1.0

### Minor Changes

- 366150e: Enable vue rule to find unimported / undefined components

## 10.0.9

### Patch Changes

- 729f768: Update dependencies
- Updated dependencies [729f768]
  - @clickbar/eslint-config-typescript@11.0.9

## 10.0.8

### Patch Changes

- 56e9f75: Convert all warnings to errors
- Updated dependencies [56e9f75]
  - @clickbar/eslint-config-typescript@11.0.8

## 10.0.7

### Patch Changes

- Updated dependencies [70070ea]
  - @clickbar/eslint-config-typescript@11.0.7

## 10.0.6

### Patch Changes

- c95ab5e: Update dependencies
- Updated dependencies [c95ab5e]
- Updated dependencies [58f46cb]
  - @clickbar/eslint-config-typescript@11.0.6

## 10.0.5

### Patch Changes

- 47b0fb1: Update dependencies
- Updated dependencies [47b0fb1]
  - @clickbar/eslint-config-typescript@11.0.5

## 10.0.4

### Patch Changes

- 619de08: chore(deps): Update dependencies
- Updated dependencies [619de08]
  - @clickbar/eslint-config-typescript@11.0.4

## 10.0.3

### Patch Changes

- 6486ca7: Update dependencies
- Updated dependencies [6486ca7]
  - @clickbar/eslint-config-typescript@11.0.3

## 10.0.2

### Patch Changes

- Updated dependencies [6ff082d]
  - @clickbar/eslint-config-typescript@11.0.2

## 10.0.1

### Patch Changes

- @clickbar/eslint-config-typescript@11.0.1

## 10.0.0

### Major Changes

- 4c4a768: Migrate to Eslint v9 & flat-config

  Please use an `eslint.config.js` file and use our rules like this:

  ```js
  import clickbar from '@clickbar/eslint-config'

  export default clickbar()
  ```

  For other necessary adjustments please checkout the ESlint config documentation.

- be607e8: Removed tailwindcss/migration-from-tailwind-2
- 6cfe24c: Move tailwind rules to base package

### Minor Changes

- 3dce2f5: Add more vue rules for best practices & type safety

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

### Patch Changes

- Updated dependencies [4c4a768]
  - @clickbar/eslint-config-typescript@11.0.0

## 9.1.2

### Patch Changes

- bda867c: chore: Update dependencies
- Updated dependencies [bda867c]
- Updated dependencies [734a085]
  - @clickbar/eslint-config-typescript@10.2.2

## 9.1.1

### Patch Changes

- d55b8bb: Update dependencies
- Updated dependencies [d55b8bb]
  - @clickbar/eslint-config-typescript@10.2.1

## 9.1.0

### Minor Changes

- f85773f: Update eslint-plugin-unicorn to v52

### Patch Changes

- 5a03030: Update minor dependencies
- Updated dependencies [5a03030]
- Updated dependencies [f85773f]
  - @clickbar/eslint-config-typescript@10.2.0

## 9.0.3

### Patch Changes

- e324ae9: Update deps
- Updated dependencies [aaefa3e]
- Updated dependencies [e324ae9]
  - @clickbar/eslint-config-typescript@10.1.0

## 9.0.2

### Patch Changes

- 15ebb42: Update dependencies
- Updated dependencies [15ebb42]
  - @clickbar/eslint-config-typescript@10.0.1

## 9.0.1

### Patch Changes

- ae09c37: Update Dependencies

## 9.0.0

### Major Changes

- d81925d: Require eslint >= 8.56.0 & TS >= 4.7.4

  We adjusted the requirements according to the typescript-eslint v7 change [1].

  [1]: https://typescript-eslint.io/blog/announcing-typescript-eslint-v7/

### Patch Changes

- Updated dependencies [d81925d]
- Updated dependencies [18bd1e0]
  - @clickbar/eslint-config-typescript@10.0.0

## 8.1.10

### Patch Changes

- ed56321: Update dependencies
- Updated dependencies [ed56321]
  - @clickbar/eslint-config-typescript@9.0.14

## 8.1.9

### Patch Changes

- 69ae051: Update dependencies
- Updated dependencies [69ae051]
  - @clickbar/eslint-config-typescript@9.0.13

## 8.1.8

### Patch Changes

- a20f9a0: Update dependencies
- Updated dependencies [a20f9a0]
  - @clickbar/eslint-config-typescript@9.0.12

## 8.1.7

### Patch Changes

- 885e8dc: Upgrade dependencies
- Updated dependencies [885e8dc]
  - @clickbar/eslint-config-typescript@9.0.11

## 8.1.6

### Patch Changes

- 04f6cfe: Update dependencies to support Vue 3.4
- Updated dependencies [04f6cfe]
  - @clickbar/eslint-config-typescript@9.0.10

## 8.1.5

### Patch Changes

- Updated dependencies [4723f1f]
  - @clickbar/eslint-config-typescript@9.0.9

## 8.1.4

### Patch Changes

- 3886866: Update Dependencies
- Updated dependencies [3886866]
  - @clickbar/eslint-config-typescript@9.0.8

## 8.1.3

### Patch Changes

- 4fcd5be: Update dependencies
- Updated dependencies [4fcd5be]
  - @clickbar/eslint-config-typescript@9.0.7

## 8.1.2

### Patch Changes

- Updated dependencies [2c249ab]
  - @clickbar/eslint-config-typescript@9.0.6

## 8.1.1

### Patch Changes

- 18a320f: Update dependencies
- Updated dependencies [18a320f]
  - @clickbar/eslint-config-typescript@9.0.5

## 8.1.0

### Minor Changes

- cf4109d: Enforce blank lines between sibling elements in the template

### Patch Changes

- Updated dependencies [b800a78]
  - @clickbar/eslint-config-typescript@9.0.4

## 8.0.4

### Patch Changes

- 83cc56a: Update dependencies
- Updated dependencies [83cc56a]
  - @clickbar/eslint-config-typescript@9.0.3

## 8.0.3

### Patch Changes

- b5d9e5e: Update dependencies
- 039b534: Update dependencies
- Updated dependencies [b5d9e5e]
- Updated dependencies [039b534]
  - @clickbar/eslint-config-typescript@9.0.2

## 8.0.2

### Patch Changes

- b06dd53: Update dependencies
- 54b2222: Fix: Disable type-checked rules for .vue files for performance
- Updated dependencies [b06dd53]
  - @clickbar/eslint-config-typescript@9.0.1

## 8.0.1

### Patch Changes

- fb0aca4: Fix: Vue typescript parser was not properly applied

## 8.0.0

### Major Changes

- 8a79e3a: Apply typescrip-eslint strict rules to all file extensions

### Patch Changes

- 564cb70: Disable typescript rules messing with Vue defineEmits etc syntax style
- Updated dependencies [8a79e3a]
- Updated dependencies [94ec1ad]
  - @clickbar/eslint-config-typescript@9.0.0

## 7.1.1

### Patch Changes

- Updated dependencies [61588d5]
  - @clickbar/eslint-config-typescript@8.1.1

## 7.1.0

### Minor Changes

- 871cce8: Update eslint-config-prettier: `unicode-bom` rule is now not turned off anymore.

### Patch Changes

- Updated dependencies [871cce8]
- Updated dependencies [8cc80cb]
  - @clickbar/eslint-config-typescript@8.1.0

## 7.0.5

### Patch Changes

- 9620636: Update dependencies
- bab2d4e: Allow event names with ':'
- Updated dependencies [9620636]
  - @clickbar/eslint-config-typescript@8.0.2

## 7.0.4

### Patch Changes

- f3e3559: Use consistent padding between tags instead of always.

## 7.0.3

### Patch Changes

- 2c1d843: Update Dependencies
- Updated dependencies [b327205]
- Updated dependencies [2c1d843]
  - @clickbar/eslint-config-typescript@8.0.1

## 7.0.2

### Patch Changes

- 042212f: Revert simplification and add explaining comment

## 7.0.1

### Patch Changes

- e69cd5f: Simplify vue config
- Updated dependencies [2788298]
  - @clickbar/eslint-config-typescript@8.0.0

## 7.0.0

### Major Changes

- 7fa6ddc: Upgrade dependencies & adopt typescript-eslint v6 (now requires Typescript >= 4.2.4)

### Patch Changes

- Updated dependencies [7fa6ddc]
  - @clickbar/eslint-config-typescript@7.0.0

## 6.1.2

### Patch Changes

- 75b1973: Fix missing repository url in package.json
- Updated dependencies [75b1973]
  - @clickbar/eslint-config-typescript@6.0.3

## 6.1.1

### Patch Changes

- b51fdf3: pkg: Add provenance to publishConfig
- Updated dependencies [b51fdf3]
  - @clickbar/eslint-config-typescript@6.0.2

## 6.1.0

### Minor Changes

- d3fb064: More strict vue/define-macros-order

## 6.0.1

### Patch Changes

- @clickbar/eslint-config-typescript@6.0.1

## 6.0.0

### Major Changes

- fda4280: # Drop eslint-plugin-prettier, add ignorePatterns

  With this release, we drop eslint-plugin-prettier and add ignorePatterns to all configs.
  This makes it easier to use prettier with eslint. This also means that you now have to use
  both eslint and prettier to format your code.

  The `scripts` in the `package.json` could look like this:

  ```json
  "scripts": {
    "fix": "pnpm lint --fix && pnpm format",
    "format": "pnpm prettier --write",
    "lint": "eslint .",
    "prettier": "prettier . --cache",
    "test": "pnpm lint && pnpm prettier --check"
  },
  ```

  The `.eslintrc.json` could look like this:

  ```json
  {
    "extends": ["@clickbar"]
  }
  ```

  If not present, also create a `.prettierignore`:

  ```sh
  # Laravel
  public
  vendor
  storage

  *.d.ts

  composer.json
  composer.lock
  pnpm-lock.yaml
  ```

  Also make sure to install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add the following to your `settings.json`:

  ```jsonc
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  ```

### Patch Changes

- Updated dependencies [fda4280]
  - @clickbar/eslint-config-typescript@6.0.0

## 5.1.3

### Patch Changes

- @clickbar/eslint-config-typescript@5.1.1

## 5.1.2

### Patch Changes

- c0c682e: enforce script, template, style component tag order
- 16afed2: fix: disable vue/v-on-handler-style

## 5.1.1

### Patch Changes

- Updated dependencies [35493b1]
  - @clickbar/eslint-config-typescript@5.1.0

## 5.1.0

### Minor Changes

- Update vue eslint rules

### Patch Changes

- 58d95dc: Update dependencies
- Updated dependencies [58d95dc]
  - @clickbar/eslint-config-typescript@5.0.1

## 5.0.0

### Major Changes

- 7841365: Update dependencies & require eslint>=8.38.0

### Patch Changes

- Updated dependencies [7841365]
- Updated dependencies [3d5e029]
  - @clickbar/eslint-config-typescript@5.0.0

## 4.7.0

### Minor Changes

- Bump dependencies

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-typescript@4.3.0

## 4.6.5

### Patch Changes

- 44d8399: Disable recommended eslint rules for typescript files
- a9f5814: Dependency updates
- Updated dependencies [44d8399]
- Updated dependencies [7eedacc]
- Updated dependencies [a9f5814]
  - @clickbar/eslint-config-typescript@4.2.0

## 4.6.4

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-typescript@4.1.4

## 4.6.3

### Patch Changes

- bump dependencies
- Updated dependencies
  - @clickbar/eslint-config-typescript@4.1.3

## 4.6.2

### Patch Changes

- @clickbar/eslint-config-typescript@4.1.2

## 4.6.1

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-typescript@4.1.1

## 4.6.0

### Minor Changes

- Updated dependencies

## 4.5.1

### Patch Changes

- Change rule orderings, add prettier always last
- Updated dependencies
  - @clickbar/eslint-config-typescript@4.0.10

## 4.5.0

### Minor Changes

- Update deps, fix bugs

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-typescript@4.0.9

## 4.4.4

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-typescript@4.0.8

## 4.4.3

### Patch Changes

- Bump dependencies
- Updated dependencies
  - @clickbar/eslint-config-typescript@4.0.7

## 4.4.2

### Patch Changes

- @clickbar/eslint-config-typescript@4.0.6

## 4.4.1

### Patch Changes

- Bump dependencies

## 4.4.0

### Minor Changes

- Update vue rules. Add tailwindcss-eslint.

## 4.3.0

### Minor Changes

- Add vue/html-self-closing rule

## 4.2.4

### Patch Changes

- Fix parser issues
- Updated dependencies
  - @clickbar/eslint-config-typescript@4.0.5

## 4.2.3

### Patch Changes

- Fix typescript override rules
- Updated dependencies
  - @clickbar/eslint-config-typescript@4.0.4

## 4.2.2

### Patch Changes

- @clickbar/eslint-config-typescript@4.0.3

## 4.2.1

### Patch Changes

- @clickbar/eslint-config-typescript@4.0.2

## 4.2.0

### Minor Changes

- Remove unneeded vue target blank rule

## 4.1.0

### Minor Changes

- Add more vue eslint rules

## 4.0.2

### Patch Changes

- Fix typescript parser options
- Updated dependencies
  - @clickbar/eslint-config-typescript@4.0.1

## 4.0.1

### Patch Changes

- Fix extends typescript

## 4.0.0

### Patch Changes

- 6e792f3: Use monorepo structure
  Use eslint-plugin-unicorn
  Use typescript-eslint
  Use eslint-plugin-vue for vue 3
- Updated dependencies [6e792f3]
  - @clickbar/eslint-config-typescript@4.0.0

## 4.0.0-beta.1

### Patch Changes

- 6e792f3: Use monorepo structure
- Updated dependencies [6e792f3]
  - @clickbar/eslint-config-typescript@4.0.0-beta.1
