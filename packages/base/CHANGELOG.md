# @clickbar/eslint-config-base

## 6.2.10

### Patch Changes

- 885e8dc: Upgrade dependencies

## 6.2.9

### Patch Changes

- 04f6cfe: Update dependencies

## 6.2.8

### Patch Changes

- 4723f1f: Update dependencies

## 6.2.7

### Patch Changes

- a1a5e0d: Upgrade unicorn to 50.0.1
- 3886866: Update Dependencies

## 6.2.6

### Patch Changes

- 4fcd5be: Update dependencies

## 6.2.5

### Patch Changes

- 2c249ab: Update dependencies

## 6.2.4

### Patch Changes

- 18a320f: Update dependencies

## 6.2.3

### Patch Changes

- 83cc56a: Update dependencies

## 6.2.2

### Patch Changes

- b5d9e5e: Update dependencies
- 039b534: Update dependencies

## 6.2.1

### Patch Changes

- b06dd53: Update dependencies

## 6.2.0

### Minor Changes

- 871cce8: Update eslint-config-prettier: `unicode-bom` rule is now not turned off anymore.
- 8cc80cb: Bump dependencies

## 6.1.2

### Patch Changes

- 2e50dc7: Allow console warn or error statements

## 6.1.1

### Patch Changes

- 2c1d843: Update Dependencies

## 6.1.0

### Minor Changes

- 7fa6ddc: Update dependencies, compatibility with Prettier 3

## 6.0.3

### Patch Changes

- 75b1973: Fix missing repository url in package.json

## 6.0.2

### Patch Changes

- b51fdf3: pkg: Add provenance to publishConfig

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
