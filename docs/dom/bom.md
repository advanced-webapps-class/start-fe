# BOM 
> Browser Object Model

![](https://i.imgur.com/Tk8RmJl.png)

- 클라이언트 측 계층 구조와 레벨 0 DOM
- 브라우저마다 차이

## window
가장 최상위 객체

```js
window.outerWidth

window.name

window.open('http://www.daum.net');

window.opener

window.close();
```
## location

url에 대한 정보

```js
location.href='http://www.daum.net';

location.reload();
```

## history

브라우저 정보

```js
history.back();

history.go(1);
```

## screen

화면에 대한 정보

```js
screen.width

screen.availWidth
```



## navigator

브라우저 정보

```js
navigator.userAgent

navigator.language

navigator.platform
```