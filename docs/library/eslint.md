# ESLint

- Find and fix problems in your JavaScript code
- https://eslint.org

## 로컬 프로젝트에 설치

```console
$ npm install eslint --save-dev
$ npx eslint --init  // .eslintrc.js 파일생성
$ npx eslint test.js
```

## VS Code 확장

- [확장 설치](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 옵션

```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
  },
};
```
