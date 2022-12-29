module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['html'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
    'import/internal-regex': '^(@/)',
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
          ['object'],
          ['type'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    'unicorn/prevent-abbreviations': ['error', { replacements: { props: false, ref: false } }],
    'unicorn/filename-case': [
      'error',
      { cases: { kebabCase: true, pascalCase: true, camelCase: true } },
    ],
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',

    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',

    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
  },
}
