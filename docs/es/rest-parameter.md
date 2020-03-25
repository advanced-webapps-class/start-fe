# Rest 파라미터

> Rest Parameter

```js
function func(...param) {
  console.log(param);
}

func(1, 2, 3);

// es5
function func() {
  console.log(arguments);
}

foo(1, 2, 3);
```
