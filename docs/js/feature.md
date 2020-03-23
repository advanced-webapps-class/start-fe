# 특징

## 객체를 전달인자로 사용

```js
function area1(width, height) {
  console.log(width * height);
}

function area2(options) {
  console.log(options.width * options.height);
}

area2({ width: 300, height: 200 });
```

전달인자가 많을경우 유용

## 기본 타입 래퍼 객체

```js
var str = 'jeju';
console.log(str.substring(0, 2)); //String 래퍼객체로 자동변환

var str = new String('jeju');
console.log(str + ' jeju');
```

## 값에 의한 & 참조에 의한

```js
//call by value
function byValue(count) {
  count = count + 2;
}
var count = 3;
byValue(count);
console.log(count); //3

//call by reference
function byReference(count) {
  count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count); // ["1","2"]
```

- by value : 기본타입 ( 숫자,불리언,문자열)
- by reference : 객체타입
