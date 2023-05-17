# Babel.js

> Babel is a JavaScript compiler, ES6 -> ES5

[babeljs.io](https://babeljs.io/)

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

```bash
$ npm install --save-dev @babel/core @babel/cli
$ npx babel script.js
```

:::tip Link
[babel repl](https://babeljs.io/en/repl.html)
[swc repl](https://swc.rs/playground)
:::
