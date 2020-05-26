# CommonJS

> CommonJS그룹에서 발표, Node.js에서 사용

```js
// sum.js
function sum() {
  return a + b;
}
module.exports = sum;

// main.js
const sum = require('sum');
console.log(sum(1, 2));
```

```js
// sum.js
export.sum = function(a,b) {
  return a+b;
}


// main.js
const module = require('sum');
console.log(module.sum(1,2));
```
