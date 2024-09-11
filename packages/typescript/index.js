/* eslint-env node */
import base from '@clickbar/eslint-config-base'
import * as pluginImport from 'eslint-plugin-import-x'
import process from 'node:process'
import tseslint from 'typescript-eslint'

export default function typescript() {
  return tseslint.config(
    ...base(),
    ...tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked[2],
    {
      name: 'clickbar/typescript',
      languageOptions: {
        parserOptions: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          tsconfigRootDir: process.cwd(),
          project: true,
        },
      },
      rules: {
        'import-x/namespace': 'off',
        'import-x/default': 'off',
        'import-x/no-named-as-default-member': 'off',

        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', disallowTypeAnnotations: false },
        ],
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true },
        ],
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          { allowNumberAndString: true },
        ],

        // handled by unused-imports/no-unused-imports
        '@typescript-eslint/no-unused-vars': 'off',

        // Disable, as this messes too much and each style has its
        // benefits. Additionally this has breaking semantic when
        // relying on specific TypeScript behaviour.
        '@typescript-eslint/consistent-type-definitions': 'off',

        // Adjust levels
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',
      },
    },
    {
      name: 'clickbar/typescript/disables/prettier',
      rules: {
        '@typescript-eslint/lines-around-comment': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/block-spacing': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/key-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-blocks': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/space-infix-ops': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
      },
    },
    {
      name: 'clickbar/typescript/disables/dts',
      files: ['*.d.ts'],
      rules: {
        'import-x/no-duplicates': 'off',
      },
    },
    {
      name: 'clickbar/typescript/import-x',
      ...pluginImport.flatConfigs.typescript,
    },
  )
}
