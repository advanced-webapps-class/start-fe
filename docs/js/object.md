# 객체

> Object

```js
var person = {
  nick: 'FE',
  age: 28,
  area: 'jeju',
  hobby: ['js', 'html'],
};
```

- [JSON](http://json.org/) (제이슨,JavaScript Object Notation)
- is a lightweight data-interchange format

## 기본 프로퍼티,메소드

```js
//constructor : 생성자 함수를 가르킴
obj.constructor == Object; // true

// hasOwnProperty : 객체가 프로퍼티를 소유(상속이 아닌)하고 있는지 검사
console.log(obj.hasOwnProperty('nick'));

// toString() : 문자열로 반환, 그다지 유용하지 않는 정보 출력
alert(obj); // alert(obj.toString())
```

- Object에서 상속받은 프로퍼티와 메소드

## 내장 객체

```js
console.log(window); //브라우저 가장 최상위 객체

var date = new Date();

Math.floor(1.4); //static

var patten = new RegExp('^abc'); //패턴매칭
```
