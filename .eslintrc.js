module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // Kết hợp Prettier với ESLint
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true, // Hỗ trợ môi trường browser
    es2021: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error'], // Sử dụng Prettier để kiểm tra format
    'react/prop-types': 'off', // Tắt kiểm tra prop-types trong React
    'no-unused-vars': 'warn', // Cảnh báo nếu có biến không sử dụng
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  settings: {
    react: {
      version: 'detect' // Tự động phát hiện phiên bản React
    }
  }
}
