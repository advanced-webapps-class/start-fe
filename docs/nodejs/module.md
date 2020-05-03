# 모듈 사용

## 기본모듈

```js
// fs 모듈 사용
// node fs.js
var fs = require('fs');

fs.writeFile('message.txt', 'Hello Node', function(err) {
  if (err) throw err;
  console.log("It's saved!");
});
```

## NPM

### 로컬 설치

[pretty-bytes 모듈](https://github.com/sindresorhus/pretty-bytes)

```bash
$ npm install pretty-bytes --save
```

```javascript
// node pretty.js

var prettyBytes = require('pretty-bytes');

console.log(prettyBytes(100));
console.log(prettyBytes(1337));
```

### 글로벌 설치

```bash
$ npm install serve --global
$ npm install cowsay --global
```

:::tip Link
[API Docs](https://nodejs.org/en/docs/)
:::
