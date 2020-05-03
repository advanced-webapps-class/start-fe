# NPM

> JavaScript 및 세계 최대의 소프트웨어 레지스트리 패키지 관리자

- [npmjs.com](http://npmjs.com/)

### npm init

앱 package.json 작성

```bash
$ npm init
```

참고 package.json: [pretty-bytes 모듈](https://github.com/sindresorhus/pretty-bytes)

### npm install [모듈]

```bash
# 모듈 설치
$ npm install jquery --save
$ npm uninstall jquery
```

### npm start

```js
...
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "deploy": "grunt deploy"
  }
...
```

:::tip Link
[CLI 설명](https://docs.npmjs.com/cli/init)
:::
