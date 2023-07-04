# @clickbar/eslint-config-base

## 6.0.1

### Patch Changes

- edd6997: - Warn on unassigned imports to make them go last.
  - Warn on console and debugger statements.

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

## 5.0.2

### Patch Changes

- 3923659: Exclude `attrs` from `unicorn/prevent-abbreviations`. Fix #20.

## 5.0.1

### Patch Changes

- 58d95dc: Update dependencies

## 5.0.0

### Major Changes

- 7841365: Update dependencies & require eslint>=8.38.0

### Minor Changes

- 3d5e029: feat: Add unused imports plugin

## 4.3.0

### Minor Changes

- Bump dependencies

## 4.2.5

### Patch Changes

- a9f5814: Dependency updates

## 4.2.4

### Patch Changes

- Fix: explicitly enable tailwind prettier plugin for pnpm projects. See https://github.com/prettier/prettier/issues/8056

## 4.2.3

### Patch Changes

- bump dependencies

## 4.2.2

### Patch Changes

- Adjust import internal regex

## 4.2.1

### Patch Changes

- Update import order configuration

## 4.2.0

### Minor Changes

- Updated dependencies

## 4.1.4

### Patch Changes

- Update deps, fix bugs

## 4.1.3

### Patch Changes

- Bump dependencies

## 4.1.2

### Patch Changes

- Update unicorn/prevent-abbreviations

## 4.1.1

### Patch Changes

- Fix parser issues

## 4.1.0

### Minor Changes

- Add prettier-plugin-tailwindcss

## 4.0.1

### Patch Changes

- Fix missing eslint-config-prettier

## 4.0.0

### Patch Changes

- 6e792f3: Use monorepo structure
  Use eslint-plugin-unicorn
  Use typescript-eslint
  Use eslint-plugin-vue for vue 3

## 4.0.0-beta.1

### Patch Changes

- 6e792f3: Use monorepo structure
