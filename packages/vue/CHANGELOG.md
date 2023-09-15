# @clickbar/eslint-config-vue

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
