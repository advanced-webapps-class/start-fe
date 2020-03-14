# Promise
> 비동기 조작의 최종 완료나 실패를 표현해주는 객체

```js
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});
```

:::tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
:::