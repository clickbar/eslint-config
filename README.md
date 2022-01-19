# eslint-config-clickbar

Opinionated eslint set of rules with support for Vue and Typescript. This also includes prettier.

## Usage

Install dependencies.

```sh
pnpm add -D eslint @clickbar/eslint-config
```

Add the `lint` script to your `package.json` `scripts`:

```json
"scripts": {
  "lint": "eslint ./resources/js --ext=js,ts,vue --fix "
},
```

Edit `.eslintrc.json`:

```json
{
  "extends": ["@clickbar"]
}
```

## VS Code config for auto fixing

```jsonc
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
// Disable prettier because we do it through `eslint-plugin-prettier`
"prettier.enable": false,
```

## License

MIT
