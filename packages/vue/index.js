import typescript from '@clickbar/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

/**
 *
 * @returns FlatConfig.ConfigArray
 */
export default function vue() {
  return [
    ...typescript(),

    ...pluginVue.configs['flat/recommended'],
    {
      files: ['**/*.vue'],
      name: 'clickbar/vue/disables/prettier',
      rules: {
        'vue/max-len': 'off',
        'vue/array-bracket-newline': 'off',
        'vue/array-bracket-spacing': 'off',
        'vue/array-element-newline': 'off',
        'vue/arrow-spacing': 'off',
        'vue/block-spacing': 'off',
        'vue/block-tag-newline': 'off',
        'vue/brace-style': 'off',
        'vue/comma-dangle': 'off',
        'vue/comma-spacing': 'off',
        'vue/comma-style': 'off',
        'vue/dot-location': 'off',
        'vue/func-call-spacing': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-end-tags': 'off',
        'vue/html-indent': 'off',
        'vue/html-quotes': 'off',
        'vue/key-spacing': 'off',
        'vue/keyword-spacing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/multiline-ternary': 'off',
        'vue/mustache-interpolation-spacing': 'off',
        'vue/no-extra-parens': 'off',
        'vue/no-multi-spaces': 'off',
        'vue/no-spaces-around-equal-signs-in-attribute': 'off',
        'vue/object-curly-newline': 'off',
        'vue/object-curly-spacing': 'off',
        'vue/object-property-newline': 'off',
        'vue/operator-linebreak': 'off',
        'vue/quote-props': 'off',
        'vue/script-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/space-in-parens': 'off',
        'vue/space-infix-ops': 'off',
        'vue/space-unary-ops': 'off',
        'vue/template-curly-spacing': 'off',
      },
    },
    {
      name: 'clickbar/vue',
      files: ['**/*.vue'],
      // This allows Vue plugin to work with auto imports
      // https://github.com/vuejs/eslint-plugin-vue/pull/2422
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
        // Set parser to vue-eslint-parser to avoid
        // `Parsing error: ESLint was configured to run on ...` errors
        // Somehow it was not enough to only override the parser for vue files above.
        parser: vueParser,
        parserOptions: {
          parser: tseslint.parser,
          sourceType: 'module',
          extraFileExtensions: ['.vue'],
        },
      },
      rules: {
        'vue/require-explicit-slots': 'error',
        'vue/v-bind-style': [
          'error',
          'shorthand',
          {
            sameNameShorthand: 'always',
          },
        ],
        'vue/no-unused-emit-declarations': 'error',
        'vue/no-use-v-else-with-v-for': 'error',

        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',

        'vue/block-order': [
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
          'error',
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
        'vue/define-emits-declaration': ['error', 'type-literal'],
        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineOptions',
              'defineProps',
              'defineEmits',
              'defineSlots',
            ],
            defineExposeLast: true,
          },
        ],
        'vue/define-props-declaration': 'error',
        'vue/html-button-has-type': 'error',
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': 'error',
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
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-ref-object-reactivity-loss': 'error',
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
        'vue/prefer-import-from-vue': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/require-macro-variable-name': 'error',
        'vue/require-typed-ref': 'error',
        'vue/v-for-delimiter-style': 'error',
        'vue/valid-define-options': 'error',
        'vue/no-undef-components': 'error',
        'vue/prefer-use-template-ref': 'error',
      },
    },
    {
      name: 'clickbar/vue/disables/ts',
      files: ['**/*.vue'],
      // This is basically what tsconfig disable type checked also would add
      // At the moment type checking vue files leads to gigantic slow downs even
      // with the project service options (20s -> >12mins in a bigger project)
      // So we just disable these options, to prevent the plugin from spinning
      // up a typescript compiler instance for every template etc in a vue file
      languageOptions: {
        parserOptions: {
          project: false,
          program: null,
          EXPERIMENTAL_useProjectService: false,
          projectService: false,
        },
      },
      rules: {
        ...tseslint.configs.disableTypeChecked.rules,
        // This is needed because the config @typescript-eslint/eslint-recommended
        // is not applied to .vue files, but we want to use it.
        // Because these rules disable incompatible base rules.
        // Additionally note, that this is the only ruleset in @typescript-eslint
        // which is hard scoped on specific file endings, so we do not need to also
        // add the stylistic and strict rules here.
        ...tseslint.configs.eslintRecommended.rules,

        // Do not mess with the Vue defineEmits definitions
        '@typescript-eslint/prefer-function-type': 'off',
        '@typescript-eslint/unified-signatures': 'off',
      },
    },
  ]
}
