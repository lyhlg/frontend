module.exports = {
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'react/prop-types': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  parser: '@typescript-eslint/parser',
};
