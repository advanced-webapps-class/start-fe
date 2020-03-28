# 배열

> Array

```js
var arr = [1, 2, 3];

// new Array() 비권장( 모호하다)
var arr = new Array(1, 2, 3); // [1,2,3]
var arr = new Array(3); // []  // [], arr.lenght=3
console.log(arr.length); //3

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

::: tip Link
[MDN 배열 메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
:::
