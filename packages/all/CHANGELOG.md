# @clickbar/eslint-config

## 6.0.4

### Patch Changes

- Updated dependencies [75b1973]
  - @clickbar/eslint-config-vue@6.1.2

## 6.0.3

### Patch Changes

- b51fdf3: pkg: Add provenance to publishConfig
- Updated dependencies [b51fdf3]
  - @clickbar/eslint-config-vue@6.1.1

## 6.0.2

### Patch Changes

- Updated dependencies [d3fb064]
  - @clickbar/eslint-config-vue@6.1.0

## 6.0.1

### Patch Changes

- @clickbar/eslint-config-vue@6.0.1

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
  - @clickbar/eslint-config-vue@6.0.0

## 5.0.4

### Patch Changes

- @clickbar/eslint-config-vue@5.1.3

## 5.0.3

### Patch Changes

- Updated dependencies [c0c682e]
- Updated dependencies [16afed2]
  - @clickbar/eslint-config-vue@5.1.2

## 5.0.2

### Patch Changes

- @clickbar/eslint-config-vue@5.1.1

## 5.0.1

### Patch Changes

- 58d95dc: Update dependencies
- Updated dependencies [58d95dc]
- Updated dependencies
  - @clickbar/eslint-config-vue@5.1.0

## 5.0.0

### Major Changes

- 7841365: Update dependencies & require eslint>=8.38.0

### Patch Changes

- Updated dependencies [7841365]
  - @clickbar/eslint-config-vue@5.0.0

## 4.2.0

### Minor Changes

- Bump dependencies

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.7.0

## 4.1.5

### Patch Changes

- a9f5814: Dependency updates
- Updated dependencies [44d8399]
- Updated dependencies [a9f5814]
  - @clickbar/eslint-config-vue@4.6.5

## 4.1.4

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.6.4

## 4.1.3

### Patch Changes

- bump dependencies
- Updated dependencies
  - @clickbar/eslint-config-vue@4.6.3

## 4.1.2

### Patch Changes

- @clickbar/eslint-config-vue@4.6.2

## 4.1.1

### Patch Changes

- @clickbar/eslint-config-vue@4.6.1

## 4.1.0

### Minor Changes

- Updated dependencies
- Fix typescript missing as peer dependency

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.6.0

## 4.0.16

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.5.1

## 4.0.15

### Patch Changes

- Update deps, fix bugs
- Updated dependencies
  - @clickbar/eslint-config-vue@4.5.0

## 4.0.14

### Patch Changes

- @clickbar/eslint-config-vue@4.4.4

## 4.0.13

### Patch Changes

- Bump dependencies
- Updated dependencies
  - @clickbar/eslint-config-vue@4.4.3

## 4.0.12

### Patch Changes

- @clickbar/eslint-config-vue@4.4.2

## 4.0.11

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.4.1

## 4.0.10

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.4.0

## 4.0.9

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.3.0

## 4.0.8

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.2.4

## 4.0.7

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.2.3

## 4.0.6

### Patch Changes

- @clickbar/eslint-config-vue@4.2.2

## 4.0.5

### Patch Changes

- @clickbar/eslint-config-vue@4.2.1

## 4.0.4

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.2.0

## 4.0.3

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.1.0

## 4.0.2

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.0.2

## 4.0.1

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-vue@4.0.1

## 4.0.0

### Patch Changes

- 6e792f3: Use monorepo structure
  Use eslint-plugin-unicorn
  Use typescript-eslint
  Use eslint-plugin-vue for vue 3
- Updated dependencies [6e792f3]
  - @clickbar/eslint-config-vue@4.0.0

## 4.0.0-beta.1

### Patch Changes

- 6e792f3: Use monorepo structure
- Updated dependencies [6e792f3]
  - @clickbar/eslint-config-vue@4.0.0-beta.1
