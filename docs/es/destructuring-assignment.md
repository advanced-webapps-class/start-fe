# 구조 분해 할당
> Destructuring assignment

```js
//es5
var team = obj.team;
var area = obj.area;

var col1 = cols[0];
var col2 = cols[1];

//es6
const { team, area } = obj;

const [ col1, col2 ] = cols;
```

:::tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
:::