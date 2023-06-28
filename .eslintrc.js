module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
  }
}
