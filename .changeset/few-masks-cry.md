---
'@clickbar/eslint-config': major
'@clickbar/eslint-config-base': major
'@clickbar/eslint-config-typescript': major
'@clickbar/eslint-config-vue': major
---

# Drop eslint-plugin-prettier, add ignorePatterns

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
