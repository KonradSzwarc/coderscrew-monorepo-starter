/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: 'src/generated/schema.ts',
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};
