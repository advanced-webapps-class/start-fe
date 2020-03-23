# 정규표현식

> 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴

## .test()

```js
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var testReg = /abc/; // 찾을 문자열
var result = testReg.test(text);

console.log(result); // true
```

## .match()

```js
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var matchReg = /abc/; // 찾을 문자열
var result = text.match(matchReg);

console.log(result); // ["abc", index: 0, input: "abc def ghi jkl abc def"]
```

## .replace()

```js
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var replaceReg = /def/; // 찾을 문자열
var result = text.replace(replaceReg, '가나다');

console.log(result); // 'abc 가나다 ghi jkl abc def'
```

::: tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)
:::
