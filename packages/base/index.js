module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  plugins: ['html', 'unused-imports'],
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

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'unicorn/prevent-abbreviations': [
      'error',
      { replacements: { props: false, ref: false, attrs: false } },
    ],
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
  },
}
