module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-shadow': ['off'],
        'no-shadow': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-console': [
          'warn',
          {
            allow: ['warn', 'error'],
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['variable'],
            format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
          },
        ],
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
};
