/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        // This is needed because the config @typescript-eslint/eslint-recommended
        // is not applied to .vue files, but we want to use it.
        // Because these rules disable incompatible base rules.
        // Additionally note, that this is the only ruleset in @typescript-eslint
        // which is hard scoped on specific file endings, so we do not need to also
        // add the stylistic and strict rules here.
        ...require('@typescript-eslint/eslint-plugin').configs[
          'eslint-recommended'
        ].overrides[0].rules,

        // Do not mess with the Vue defineEmits definitions
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/unified-signatures": "off",
      },
    },
  ],
  // Set parser to vue-eslint-parser to avoid
  // `Parsing error: ESLint was configured to run on ...` errors
  // Somehow it was not enough to only override the parser for vue files above.
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: true,
  },
  plugins: ['tailwindcss'],
  extends: [
    'plugin:vue/vue3-recommended',
    '@clickbar/eslint-config-typescript',
    'prettier',
  ],
  rules: {
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',

    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',

    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],

    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': [
      'error',
      ['script-setup'], // 'script-setup', 'composition', 'composition-vue2', or 'options'
    ],
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': [
      'error',
      'camelCase',
      // Allow names with ':' eg. click:positive
      { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] },
    ],
    'vue/define-emits-declaration': 'error',
    'vue/define-macros-order': [
      'error',
      { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] },
    ],
    'vue/define-props-declaration': 'error',
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-duplicate-attr-inheritance': 'warn',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-ref-object-destructure': 'warn',
    'vue/no-required-prop-with-default': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-root-v-if': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/padding-line-between-tags': [
      'error',
      [{ blankLine: 'always', prev: '*', next: '*' }],
    ],
    'vue/prefer-define-options': 'error',
    'vue/prefer-import-from-vue': 'warn',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-macro-variable-name': 'error',
    'vue/require-typed-ref': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/valid-define-options': 'error',
  },
}
