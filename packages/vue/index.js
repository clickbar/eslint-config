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
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@clickbar/eslint-config-typescript'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': [
      'error',
      ['script-setup'], // 'script-setup', 'composition', 'composition-vue2', or 'options'
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/html-button-has-type': 'error',
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-empty-component-block': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-function-call': 'error',
  },
}
