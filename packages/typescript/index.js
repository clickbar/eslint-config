// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('@clickbar/eslint-config-base')

module.exports = {
  extends: [
    '@clickbar/eslint-config-base',
    'plugin:@typescript-eslint/stylistic',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  overrides: [
    ...base.overrides,
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parserOptions: { project: true },
      extends: [
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:@typescript-eslint/strict-type-checked',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',
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

    // handled by unused-imports/no-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
