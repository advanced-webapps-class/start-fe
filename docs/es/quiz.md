# 문제풀기

## 1.문자열 합치기

```js
const year = 2022;
const month = 11;
const day = 3;

// quiz

// 출력: 2022-12-03
console.log(dateString);
```

## 2.문자열 분리

```js
const dateString = "2022-12-12";

// quiz

// 출력: [2022,12,12];
```

## 3.문자열 변경

```js
const text = "나는 XX를 좋아해";
const item = "JS";

// quiz

// 출력: 나는 JS를 좋아해
```

## 4.문자열 검색

```js
const text = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

// quiz

// 출력: true
```

## 5.모든 배열값 더하기

```js
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

// quiz
// point3이 생길수도 있을때 대응

// 출력: 373 (모든 배열값들이 합)
```

## 6.소수점이하를 버리고 정수 구하기

```js
const a = 1.2;
const b = 3.4;

// quiz

// 출력: 4
```

## 7.랜덤수 구하기

```js
const min = 1;
const max = 10;

// quiz

//출력: 3 (1~10 포함한 랜덤수)
```

## 8.배수 확인

```js
const target = 10;
const num = 3;

// quiz
// target이 num이 배수인지

// 출력: false
```

## 9.대문자로 변경

```js
const nick = "kakao";

// quiz

// 출력: KAKAO
```

## 10.원시타입 요소만 배열로 만들기

```js
const items = [1, "a", true, ["a"], { n: 1 }];

// quiz

// 출력: [1,'a',true]
```

## 11.배열값 나누기

```js
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함

// 출력: a,b,c---d,e,f---g,h,i---j
```

## 12.배열값 나눠서 다시 배열로

```js
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력

// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]
```

## 13.페이지의 시작번호 구하기

```js
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const getStartIndexByPage = function (page) {
  // quiz
};

// 출력
getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6
```

## 14.전화번호 패턴 검사

```js
const phoneNumber = `010-1234-1234`;

// quiz

// xxx-xxxx-xxxx 패턴찾기

// 출력: true
```

## 15.객체값 변경

```js
const user = { nick: "nio", age: 20, location: "제주" };

// quiz

// 출력: {nick:'nio', age:21, name:'부산'}
```

## 16.문자열을 객체형으로

```js
const text = "{a:1, b:2}";

// quiz

// 출력: {a:1 , b:2}
```

## 17.json을 문자열로

```js
const user = { nick: "nio", age: 20, location: "제주" };

// quiz

// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"
```

## 18. 새로운 배열 생성

```js
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// quiz

// 출력: 짝수만 [2,4,6,8,10]
```

## 19. 배열 필터

```js
const list = [
  {
    id: 1,
    title: "JS",
    isPublic: true,
  },
  {
    id: 2,
    title: "기본",
    isPublic: true,
  },
  {
    id: 3,
    title: "ecma",
    isPublic: true,
  },
  {
    id: 4,
    title: "dom",
    isPublic: false,
  },
];

// quiz

// 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기
```

## 20.다음일 구하기

```js
const dday = "2022-02-02";

// quiz

// 출력: '2022-02-03'
```
