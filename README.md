# eslint-config-clickbar

Opinionated eslint set of rules with support for Vue and Typescript. Used in conjunction with prettier.

## Usage

Install dependencies.

```sh
pnpm add -D eslint @clickbar/eslint-config
pnpm add -D --save-exact prettier
```

Add the scripts to your `package.json` `scripts`:

```json
"scripts": {
  "fix": "pnpm lint --fix && pnpm format",
  "format": "pnpm prettier --write",
  "lint": "eslint .",
  "prettier": "prettier . --cache",
  "test": "pnpm lint && pnpm prettier --check"
},
```

Edit `eslint.config.js`:

```js
/* eslint-env node */
import clickbar from '@clickbar/eslint-config'

export default clickbar()
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

## VS Code config for auto fixing

Make sure you also install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add the following to your `settings.json`:

```jsonc
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

## License

MIT
