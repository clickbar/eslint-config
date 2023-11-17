// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('@clickbar/eslint-config-base')

module.exports = {
  extends: [
    '@clickbar/eslint-config-base',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'prettier',
  ],
  parserOptions: {
    project: true,
  },
  overrides: [...base.overrides],
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
}
