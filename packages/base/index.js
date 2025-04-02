import js from '@eslint/js'
import * as pluginImport from 'eslint-plugin-import-x'
import pluginTailwindCSS from 'eslint-plugin-tailwindcss'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default function base() {
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
        '**/bun.lock',

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
        '**/generated.d.ts',
        '**/routes.d.ts',

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
      ...pluginImport.flatConfigs.recommended,
    },

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
        reportUnusedDisableDirectives: 'error',
      },
      plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tailwindcss: pluginTailwindCSS,

        'unused-imports': pluginUnusedImports,
      },
      settings: {
        'import-x/internal-regex': '^(@/)', // allow imports beginning with @/
      },
      rules: {
        'tailwindcss/enforces-negative-arbitrary-values': 'error',
        'tailwindcss/enforces-shorthand': 'error',
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
          'error',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],

        'unicorn/prevent-abbreviations': [
          'error',
          { replacements: { props: false, ref: false, attrs: false, utils: false, env: false } },
        ],
        'unicorn/filename-case': [
          'error',
          { cases: { kebabCase: true, pascalCase: true, camelCase: true } },
        ],
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-module': 'off',
        // The autofix is too aggressive. For example it changes
        // Interface Foo { bar: '\\Escaped' } to Interface Foo { bar: String.raw`\Escaped` }
        // which is not valid TypeScript.
        'unicorn/prefer-string-raw': 'off',

        // Prevent clashes with prettier formatting
        'unicorn/template-indent': 'off',
        'unicorn/empty-brace-spaces': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/number-literal-case': 'off',

        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-debugger': 'error',
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-const': 'error',
      },
    },
  ]
}
