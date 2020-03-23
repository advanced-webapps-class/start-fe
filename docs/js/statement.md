# 구문

## if

```js
if (isMan) {
  // 표현식이 true일경우 블럭 코드 실행
  console.log('난 남자');
} else {
  console.log('난 여자인가?');
}

var gender = isMan ? '남자' : '여자'; // 삼항 연산자
```

## for

```js
for (var count = 0; count < 5; count++) {
  //총 5번 실행
}

var obj = { a: 1, b: 2 };

//느리다.비권장
for (var prop in obj) {
  console.log(prop, obj[prop]);
}
```

## while

```js
var isClosed = true;
while (isClosed) {
  //반복코드

  //false로 만들어서 루프종료
  isClosed = false;

  //루프종료
  break;
}
```

## 함수

```js
function sum(x) {
  var y = 1;
  return x + y; //return 문이 없을경우 undefined반환
}

var sum = function() {
  var y = 1;
  return x + y;
};
```

## try / catch / finally

```js
  try{
      //이부분 실행시 예외발생할경우 catch 로 이동
  }
  catch(e){
      // 예외발생할 경우만 실행
  }
  filnally{
      //무조건 실행
  }
```

::: tip Link

- [while](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while)
- [switch](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch)
  :::
