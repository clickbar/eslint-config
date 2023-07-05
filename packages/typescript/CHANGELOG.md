# @clickbar/eslint-config-typescript

## 6.0.2

### Patch Changes

- b51fdf3: pkg: Add provenance to publishConfig
- Updated dependencies [b51fdf3]
  - @clickbar/eslint-config-base@6.0.2

## 6.0.1

### Patch Changes

- Updated dependencies [edd6997]
  - @clickbar/eslint-config-base@6.0.1

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
  - @clickbar/eslint-config-base@6.0.0

## 5.1.1

### Patch Changes

- Updated dependencies [3923659]
  - @clickbar/eslint-config-base@5.0.2

## 5.1.0

### Minor Changes

- 35493b1: Ignore eslint-plugin-import rules for typescript

## 5.0.1

### Patch Changes

- 58d95dc: Update dependencies
- Updated dependencies [58d95dc]
  - @clickbar/eslint-config-base@5.0.1

## 5.0.0

### Major Changes

- 7841365: Update dependencies & require eslint>=8.38.0

### Minor Changes

- 3d5e029: feat: Add unused imports plugin

### Patch Changes

- Updated dependencies [7841365]
- Updated dependencies [3d5e029]
  - @clickbar/eslint-config-base@5.0.0

## 4.3.0

### Minor Changes

- Bump dependencies

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-base@4.3.0

## 4.2.0

### Minor Changes

- 7eedacc: Use ts override rules also for mts & cts files

### Patch Changes

- 44d8399: Disable recommended eslint rules for typescript files
- a9f5814: Dependency updates
- Updated dependencies [a9f5814]
  - @clickbar/eslint-config-base@4.2.5

## 4.1.4

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-base@4.2.4

## 4.1.3

### Patch Changes

- bump dependencies
- Updated dependencies
  - @clickbar/eslint-config-base@4.2.3

## 4.1.2

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-base@4.2.2

## 4.1.1

### Patch Changes

- Remove removed ban-ts-ignore rule
- Updated dependencies
  - @clickbar/eslint-config-base@4.2.1

## 4.1.0

### Minor Changes

- Updated dependencies
- Fix typescript missing as dev dependency

## 4.0.10

### Patch Changes

- Change rule orderings, add prettier always last

## 4.0.9

### Patch Changes

- Update deps, fix bugs
- Updated dependencies
  - @clickbar/eslint-config-base@4.1.4

## 4.0.8

### Patch Changes

- Fix extends ordering in ts

## 4.0.7

### Patch Changes

- Bump dependencies
- Updated dependencies
  - @clickbar/eslint-config-base@4.1.3

## 4.0.6

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-base@4.1.2

## 4.0.5

### Patch Changes

- Fix parser issues
- Updated dependencies
  - @clickbar/eslint-config-base@4.1.1

## 4.0.4

### Patch Changes

- Fix typescript override rules

## 4.0.3

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-base@4.1.0

## 4.0.2

### Patch Changes

- Updated dependencies
  - @clickbar/eslint-config-base@4.0.1

## 4.0.1

### Patch Changes

- Fix typescript parser options

## 4.0.0

### Patch Changes

- 6e792f3: Use monorepo structure
  Use eslint-plugin-unicorn
  Use typescript-eslint
  Use eslint-plugin-vue for vue 3
- Updated dependencies [6e792f3]
  - @clickbar/eslint-config-base@4.0.0

## 4.0.0-beta.1

### Patch Changes

- 6e792f3: Use monorepo structure
- Updated dependencies [6e792f3]
  - @clickbar/eslint-config-base@4.0.0-beta.1
