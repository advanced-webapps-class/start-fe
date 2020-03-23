# 구조 분해 할당

> Destructuring Assignment

```js
//es5
var team = obj.team;
var area = obj.area;

var col1 = cols[0];
var col2 = cols[1];

//es6
const { team, area } = obj;
const [col1, col2] = cols;
const [, cols2] = cols;

// es5
function getArea(options) {
  return options.width * options.height;
}

// es6
function getArea({ width, height }) {
  return width * height;
}
```

:::tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
:::
