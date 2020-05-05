# ESLint

- Find and fix problems in your JavaScript code
- https://eslint.org

## 로컬 프로젝트에 설치

```bash
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

## eslint-config-airbnb-base

[airbnb 코딩 가이드](https://github.com/tipjs/javascript-style-guide) eslint

```bash
$ npx install-peerdeps --dev eslint-config-airbnb-base
```

```js
// .eslintrc.js
-  extends: 'eslint:recommended',
+  extends: ['eslint:recommended', 'airbnb-base'],
```

## eslint-config-prettier

```bash
$ npm install eslint-config-prettier --save-dev
```

```js
// .eslintrc.js
-  extends: ['eslint:recommended', 'airbnb-base'],
+  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
```
