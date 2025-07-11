# @clickbar/eslint-config-base

## 10.0.2

### Patch Changes

- 97cc5a9: Prefer ternary only when it fits single line
- 875ae23: Update dependencies

## 10.0.1

### Patch Changes

- 65aab41: Update dependencies

## 10.0.0

### Major Changes

- 99bedb0: Update eslint-plugin-unicorn to v59

  See https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v59.0.0

### Patch Changes

- 65828d0: Update dependencies

## 9.0.3

### Patch Changes

- 0deb45f: Update dependencies
- 8272787: Update Vue plugin, unicorn plugin & import resolver
- 059fecf: Remove tailwindcss plugin to support using TW4

  This causes these rules to be removed:
  - tailwindcss/enforces-negative-arbitrary-values
  - tailwindcss/enforces-shorthand
  - tailwindcss/no-contradicting-classname

## 9.0.2

### Patch Changes

- 7e28be4: Disable annoying unicorn rules

## 9.0.1

### Patch Changes

- 2ef85bc: Remove utils from abbreviaton replacement list

## 9.0.0

### Major Changes

- efa817f: Remove Prettier as Peer Dependency

  Please use @clickbar/style-guide for prettier settings and plugins.

## 8.2.0

### Minor Changes

- a206f16: Update Unicorn Plugin to v57

### Patch Changes

- 89b3897: Update dependencies

## 8.1.14

### Patch Changes

- 5b14d5b: Add new bun lock, ziggy & laravel-typescript files to ignore
- cc773d1: Update dependencies

## 8.1.13

### Patch Changes

- 3ef4ba5: Update dependencies

## 8.1.12

### Patch Changes

- e6cd8fe: Update dependencies

## 8.1.11

### Patch Changes

- 3181315: Update dependencies & support TS 5.7

## 8.1.10

### Patch Changes

- 101101d: Update dependencies

## 8.1.9

### Patch Changes

- d443140: Update eslint-plugin-unicorn to v56
- 402ba36: Update dependencies

## 8.1.8

### Patch Changes

- 729f768: Update dependencies

## 8.1.7

### Patch Changes

- 56e9f75: Convert all warnings to errors

## 8.1.6

### Patch Changes

- 70070ea: Update dependencies

## 8.1.5

### Patch Changes

- c95ab5e: Update dependencies

## 8.1.4

### Patch Changes

- 47b0fb1: Update dependencies

## 8.1.3

### Patch Changes

- 619de08: chore(deps): Update dependencies

## 8.1.2

### Patch Changes

- 6486ca7: Update dependencies

## 8.1.1

### Patch Changes

- 6ff082d: Update dependencies
- 69f55ea: Remove unused eslint-plugin-promise

## 8.1.0

### Minor Changes

- b273b1a: Reenable missing unicorn & import recommended rules

## 8.0.0

### Major Changes

- 4c4a768: Migrate to Eslint v9 & flat-config

  Please use an `eslint.config.js` file and use our rules like this:

  ```js
  import clickbar from '@clickbar/eslint-config'

  export default clickbar()
  ```

  For other necessary adjustments please checkout the ESlint config documentation.

- 9781091: Require prettier as a peer dependency
- 4c4a768: Switch to import-x eslint plugin

  Note: You might need to rename references for `import/....` rules to `import-x/....`

- 4c4a768: Remove eslint-plugin-html & eslint-plugin-eslint-comments
- 6cfe24c: Move tailwind rules to base package

## 7.1.2

### Patch Changes

- bda867c: chore: Update dependencies
- 08c8aff: fix: unused-imports require v3.2.0 to fix issues with dependencies

## 7.1.1

### Patch Changes

- d55b8bb: Update dependencies

## 7.1.0

### Minor Changes

- f85773f: Update eslint-plugin-unicorn to v52

### Patch Changes

- 5a03030: Update minor dependencies

## 7.0.2

### Patch Changes

- e324ae9: Update deps

## 7.0.1

### Patch Changes

- 15ebb42: Update dependencies

## 7.0.0

### Major Changes

- d81925d: Require eslint >= 8.56.0 & TS >= 4.7.4

  We adjusted the requirements according to the typescript-eslint v7 change [1].

  [1]: https://typescript-eslint.io/blog/announcing-typescript-eslint-v7/

## 6.2.12

### Patch Changes

- ed56321: Update dependencies

## 6.2.11

### Patch Changes

- 69ae051: Update dependencies

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
