# XSS
> Cross-Site Scripting

::: danger
사용자의 입력을 신뢰하지 말자
:::


- 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점
- 사용자의 입력을 화면에 표시할땐 항상 [escape](http://kko.to/GOc7kidTT)가 필요

```js
//bad
wrap.innerHTML = `검색어는 ${query} 입니다`;

//good
wrap.innerHTML `검색어는 ${escape(query)} 입니다`;
```




:::tip Link
[XSS위키](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85)
:::