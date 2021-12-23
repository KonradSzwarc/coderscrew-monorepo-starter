/**
 * @type {import('eslint').Linter.ConfigOverride}
 */
module.exports = {
  files: [
    '**/vite.config.ts',
    '**/tsup.config.ts',
    '**/jest.config.ts',
    '**/jest-e2e.config.ts',
    'apps/website/pages/**',
  ],
  rules: {
    'import/no-default-export': 0,
  },
};
