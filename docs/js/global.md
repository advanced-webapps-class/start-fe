# 주요 전역함수

## 자주사용

```js
alert("alert");

var who = prompt("당신은 누구세요?");

var isDelete = confirm("정말 삭제합니까?");

var enc = encodeURIComponent("카카오");
decodeURIComponent(enc);

isNaN("1"); //숫자 여부

parseInt("12");
parseInt("09", 10); //항상 두번째 인자 주는 습관
parseFloat("10.33");
```



## setTimeout, setInterval

```js
function test(){
    console.log("test()");
}

var id = setTimeout(test, 1000); //1초후 1번실행

var id = setInterval(test, 1000); //1초마다 계속 실행

//setInterval 보다 나은 방법
function test(){
    console.log("test()");
    setTimeout(test, 1000);
}

//clearTimeout(id) ;
//clearInterval(id);
```