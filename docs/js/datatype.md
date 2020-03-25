# 데이터 타입

## Number

> 숫자

```js
var count = 5;
```

정수,실수 구분하지 않음

|                    키워드 | 설명                                  |
| ------------------------: | ------------------------------------- |
|                  Infinity | 무한대를 나타내는 특수한 값           |
|                       NaN | 숫자가 아닌 특수한 값                 |
|          Number.MAX_VALUE | 표현 가능한 가장 큰 수값              |
|          Number.MIN_VALUE | 표현 가능한 (0에 가까운) 가장 작은 수 |
|                Number.NaN | 숫자가 아닌 특수한 값                 |
| Number.POSITIVE_INFOINITY | 양의 무한대를 표현하는 특수한 값      |
|  Number.NEGATIVE_INFINITY | 음의 무한대를 표현하는 특수한 값      |

## String

> 문자열

```js
var nick = "my nick is 'fe'";
var homepage = 'www.kakaocorp.com';
```

## Boolean

> 불린

```js
var isMan = true; // true | false

console.log(nick == '');

console.log(!!'test'); // true
```

제어 구조내에서 주로 사용 (if문 , for문)

## Function

> 함수

```js
var log = function(str) {
  console.log(str);
};
function log(str) {
  console.log(str);
}
```

js코드로 조작할수 있는 형태의 값
변수나 배열, 객체에 저장가능, 전달인자로도 사용

## Object

> 객체

```js
var image = {}; // image = new Object();

image.width = 1;
image.height = 2;

image['width'] = 1; //연관배열

image['name' + i] = '1.jpg'; //동적으로도 할당 가능

image = { width: 1, height: 2 };
```

이름붙은 값(프로퍼티) 들이 모임

## Array

> 배열

```js
image = []; // new Array();

image[0] = '1.jpg';
image[1] = '2.jpg';

image = ['1.jpg', 2, { name: '3.jpg' }];
```

- 데이터 값들의 모음
- 객체 : 데이터값에 이름
- 배열 : 데이터값에 번호(index)

### null

> 널

```js
var nick = null;
```

아무런 값도 나타내지 않는 특수한 키워드

## undefined

> 정의 되지 않음

```js
var nick; //undefined
```

- global 변수 undefined에 접근할 때
- return 구문이 없는 함수는 undefined를 반환함
- return 구문으로 아무것도 반환하지 않을 때
- 없는 프로퍼티를 찾을 때
- 함수 인자가 생략될 때
- undefined가 할당된 모든 것
