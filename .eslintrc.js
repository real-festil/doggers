module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'airbnb-typescript', '@feature-sliced'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/display-name': 0,
    'no-console': 1,
    '@typescript-eslint/no-unnecessary-condition': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
