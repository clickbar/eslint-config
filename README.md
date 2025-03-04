# eslint-config-clickbar

Opinionated eslint set of rules with support for Vue and Typescript.

## Usage

Install dependencies.

```sh
pnpm add -D eslint @clickbar/eslint-config
```

Add the scripts to your `package.json` `scripts`:

```json
"scripts": {
  "fix": "pnpm lint --fix",
  "lint": "eslint .",
},
```

Edit `eslint.config.js`:

```js
/* eslint-env node */
import clickbar from '@clickbar/eslint-config'

export default clickbar()
```

## VS Code config for auto fixing

Add the following to your `settings.json`:

```jsonc
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

## License

MIT
