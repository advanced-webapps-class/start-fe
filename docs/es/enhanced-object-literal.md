# 향상된 객체 리터럴

> Enhanced Object Literal

```js
const number = 1234;

const student = {
  // number: number
  number,
};
```

```js
const student = {
  number,
  // playGame:function(){
  // },
  playGame() {
    console.log('play');
  },
};
```
