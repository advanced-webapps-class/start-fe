# Generator
> 실행 컨텍스트를 빠져나갔다가 다시 돌아올 수 있는 함수

- `Generator` 함수는 호출해도 즉시 실행되지 않고 `iterator object` 를 반환
- `iterator` 의 `next()` 메서드가 호출되면, `generator function` 이 실행되는데, `iterator` 로부터 리턴할 값을 가리키는 첫번째 `yield expression` 까지 실행되거나 또는 다른 `generator function` 에 위임하는 `yield*` 까지 실행
- `next()` 메서드는 `value` 속성과 `generator`가 마지막 값을 갖는지를 표시할 `done` 속성을 가진 객체를 반환

## Generator 의 기본 구조

```javascript
function* test () {
  for (var i=0; i<3; i++) {
    yield i;
  }
}

var genFunc = test();

console.log(genFunc.next()); // {value: 0, done: false}
console.log(genFunc.next()); // {value: 1, done: false}
console.log(genFunc.next()); // {value: 2, done: false}
console.log(genFunc.next()); // {value: undefined, done: true}
console.log(genFunc.next()); // {value: undefined, done: true}
```


## yield
- `Generator` 함수를 실행해서 반환된 `iterator`의 `next()` 메서드를 호출하면 선언된 `Generator` 함수의 다음 `yield` 까지 실행
- 이때 `next()` 메서드에 특정값을 인자로 전달하면 `yield` 구문에서 받은 인자값을 `Generator` 함수의 컨텍스트 안으로 전달 가능

```javascript
function* test () {
  for (var i=0; i<3; i++) {
    let val = yield i;
    console.log(val); //456, 789 출력
  }
}

var genFunc = test();

console.log(genFunc.next('123')); //처음 전달한 123 값은 참조하지 못한다.
console.log(genFunc.next('456'));
console.log(genFunc.next('789'));
```


## yield*
- `yield*` 표현은 다른 generator 또는 이터레이터 객체에 위임하는데 사용
- 앞서 살펴본 `yield` 와는 달리 `next()` 에서 전달한 값을 반환하지 않고 이터레이터 가 종료될 때 `return` 되는 값만 반환
- `yield*` 표현은 배열, 문자열 또는 arguments 와 같이 다른 반복 가능한 객체도 `yield` 가능

```javascript
function* anotherGenerator (i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator (i) {
  yield i;
  yield* ['홍길동', '이순신'];
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 홍길동
console.log(gen.next().value); // 이순신
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```


## 생성자로 사용될 수 없는 Generator
- `Generator` 는 생성자로서 사용 불가

```javascript
function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor"
```


## 익명 함수로 선언할 수 있는 Generator
`Generator` 를 익명 함수 형태로 선언하는 것은 일반적인 함수와 동일한 방식으로 선언

```javascript
var square = function* (y) {
  yield y * y;
};
```

:::tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)
:::