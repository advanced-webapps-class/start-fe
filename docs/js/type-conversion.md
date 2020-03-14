# 타입변환 

한 타입의 값이 다른 타입값을 요구하는 곳에서 사용될때 필요에 따라 알아서 변환

### 동적 타이핑

```js
var foo = 42;    // foo 는 이제 Number 임
var foo = "bar"; // foo 는 이제 String 임
var foo = true;  // foo 는 이제 Boolean 임
```



```js
if("test"){  //true 로 자동 변환
  console.log("true");
}

"2"  + 2; // "22"

2 + 5 + "1" // "71"
```

::: tip Link
- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
- [암묵적인 강제형변환과 타입캐스팅](http://www.slideshare.net/senxation/ss-16791882)
:::
