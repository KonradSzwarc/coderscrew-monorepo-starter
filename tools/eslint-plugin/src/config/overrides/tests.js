/**
 * @type {import('eslint').Linter.ConfigOverride}
 */
module.exports = {
  files: ['**/?(*.)+spec.ts?(x)'],
  env: { jest: true, node: true },
  extends: [
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:jest-formatting/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
  },
};
