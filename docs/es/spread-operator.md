# 전개 구문

> Spread Operator

```js
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
```

```js
const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]
```

```js
const obj = {
  a: 1,
  b: 2,
};
const newObj = { ...obj };
console.log(newOjb);
```
