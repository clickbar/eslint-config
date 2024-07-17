import js from '@eslint/js'
import * as pluginImport from 'eslint-plugin-import-x'
import { default as pluginTailwindCSS } from 'eslint-plugin-tailwindcss'
import { default as pluginUnicorn } from 'eslint-plugin-unicorn'
import { default as pluginUnusedImports } from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default function base() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return [
    {
      name: 'clickbar/ignore',
      ignores: [
        '**/node_modules/',
        '**/dist/',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/bun.lockb',

        '**/output/',
        '**/coverage/',
        '**/temp/',
        '**/.temp/',
        '**/tmp/',
        '**/.tmp/',
        '**/.history/',
        '**/.vitepress/cache/',
        '**/.nuxt/',
        '**/.next/',
        '**/.vercel/',
        '**/.changeset/',
        '**/.idea/',
        '**/.cache/',
        '**/.output/',
        '**/.vite-inspect/',
        '**/.yarn/',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__/',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',

        '**/composer.json',
        '**/composer.lock',
        '**/storage/',
        '**/public/',
        '**/vendor/',
      ],
    },
    {
      name: 'eslint/js/recommended',
      ...js.configs.recommended,
    },
    {
      name: 'import-x/recommended',
      plugins: {
        'import-x': pluginImport,
      },
      rules: {
        ...pluginImport.configs.recommended.rules,
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    pluginUnicorn.configs['flat/recommended'],
    {
      name: 'clickbar/base',
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          ...globals.builtin,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: 'warn',
      },
      plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tailwindcss: pluginTailwindCSS,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'unused-imports': pluginUnusedImports,
      },
      settings: {
        'import-x/internal-regex': '^(@/)', // allow imports beginning with @/
      },
      rules: {
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/no-contradicting-classname': 'error',

        'import-x/order': [
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
            warnOnUnassignedImports: true,
          },
        ],
        'import-x/first': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-unresolved': 'off',
        'import-x/no-absolute-path': 'off',

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

        // Prevent clashes with prettier formatting
        'unicorn/template-indent': 'off',
        'unicorn/empty-brace-spaces': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/number-literal-case': 'off',

        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'warn',
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-const': 'error',
      },
    },
  ]
}
