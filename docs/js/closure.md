# 클로저 
> 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것

- 지역 변수(Local Variable)의 참조(by Reference)를 가진 함수
- Scope 밖에 있는 변수들에 접근 가능한 함수
- 생성 당시의 환경을 간직한 있는 코드 블록

```js
var example = function(){
    var i = 1;
    return function(){
        alert(i++);
    };
}();

/*
var example = function(){
    return i++;
}
*/

example(); //계속 호출 
```

```js
var list = document.getElementsByTagName("li");

for(var i=0; i < list.length; i++) {
    list[i].onclick = function() {
        alert( i+1 );
    }
}
```

- 클로저를 생성한 함수의 활성화 객체를 그대로 가지고 있게 되어 의도치 않은 메모리 낭비가 발생할 수 있다.
- 클로저 실행 시, 불필요한 스코프 탐색을 하게 되어 성능이 나빠진다.

::: tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
:::