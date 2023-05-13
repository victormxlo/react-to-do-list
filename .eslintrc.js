module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-no-undef': 0,
    'react/no-unused-state': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-duplicates': 0,
  },
};
