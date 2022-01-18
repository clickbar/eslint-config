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
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@clickbar/eslint-config-ts'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/component-api-style': [
      'error',
      ['script-setup'], // "script-setup", "composition", "composition-vue2", or "options"
    ],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/html-button-has-type': 'error',
    'vue/v-on-function-call': 'error',
  },
}
