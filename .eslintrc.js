module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: ["plugin:react/recommended", "prettier", "@feature-sliced"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    "react/display-name": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
