# JSONP
> JSON Padding

```js
callback( {
    "nick" : "FE MAN",
    "age" : 28,
    "area" :  "FE",
    "hobby" : ["js","html"]
} )
```

* JSONP != XMLHttpRequest
* Ajax 크로스도메인 이슈 회피

## 예제

```js
//JS동적 삽입
var head = document.getElementsByTagName("head")[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://api.facebook.com/method/links.getStats?format=json&urls=http://daum.net&callback=complate';
head.appendChild(script);
```

## 특징 

* 사용하기 편하다
* 크로스도메인 이슈 피함
* http 상태에 따른 디테일한 처리 불가능