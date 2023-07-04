// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('@clickbar/eslint-config-base')

module.exports = {
  extends: [
    '@clickbar/eslint-config-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    ...base.overrides,
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parserOptions: { project: ['./tsconfig.json'] },
      rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'warn',
      },
    },
  ],
  rules: {
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',

    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // handled by unused-imports/no-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
