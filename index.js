module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    'cypress/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
  ],
  // required to lint *.vue files
  plugins: ['cypress', 'vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
    'no-var': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-self-closing': ['error', { html: { void: 'any' } }],
    'prettier/prettier': [
      'error',
      {
        overrides: [
          {
            files: '*.php',
            options: {
              tabWidth: 4,
            },
          },
        ],
        semi: false,
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
}
