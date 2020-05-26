# ESM (ES6 Modules)

> ES6 모듈 시스템 도입

```js
// sum.js
function sum(a, b) {
  return a + b;
}
export default sum;

// main.js
import sumModule from './sum';

console.log(sumModule(1, 2));
```

```js
// sum.js
export function sum(a, b) {
  return a + b;
}

// main.js
import { sum } from './sum';
console.log(sum(1, 2));
```

::: tip Link

- [빌드없이 사용](https://codesandbox.io/s/happy-stonebraker-hjnct)
  :::
