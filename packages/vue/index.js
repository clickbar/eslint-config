/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
      rules: {
        ...require('@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended').overrides[0]
          .rules,
      },
    },
  ],
  plugins: ['tailwindcss'],
  extends: [
    'plugin:vue/vue3-recommended',
    '@clickbar/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',

    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',

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
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': 'error',
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-child-content': 'error',
    'vue/no-duplicate-attr-inheritance': 'warn',
    'vue/no-empty-component-block': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-import-from-vue': 'warn',
    'vue/prefer-separate-static-class': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-function-call': 'error',
  },
}
