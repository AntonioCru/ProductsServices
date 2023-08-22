module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
}

// // .eslintrc.js
// module.exports = {
//   globals: {
//     __PATH_PREFIX__: true,
//   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//     babelOptions: {
//       presets: ['@babel/preset-react'],
//     },
//   },
//   env: {
//     es6: true,
//     browser: true,
//     node: true,
//   },
//   extends: [
//     'airbnb',
//     'prettier',
//     'plugin:jest/recommended',
//     'plugin:testing-library/react',
//   ],
//   plugins: ['prettier', 'jest', 'testing-library'],
//   rules: {
//     'prettier/prettier': 'error',
//     semi: ['error', 'never'],
//     'comma-dangle': 0,
//     'no-console': 'off',
//     'react/prop-types': 'off',
//     'arrow-body-style': 'off',
//     'prefer-arrow-callback': 'off',
//     'react/jsx-props-no-spreading': 'off',
//   },
// }
