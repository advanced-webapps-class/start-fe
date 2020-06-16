# 기본 배우기

## 기본 html

```html
<body>
  <div id="root"></div>
</body>

<script type="module">
  const rootEl = document.getElementById('root');
  const el = document.createElement('div');
  el.textContent = 'React';
  el.className = 'container';
  rootEl.append(el);
</script>
```

## React.js

```diff
<body>
  <div id="root"></div>
</body>

+ <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>

<script type="module">
  const rootEl = document.getElementById('root');
-  const el = document.createElement('div');
-  el.textContent = 'React';
-  el.className = 'container';
-  rootEl.append(el);


+  const el = React.createElement(
+    'div',
+    {className: 'container'},
+    'React',
+  )
</script>
```

## ReactDom.js

```diff
<body>
  <div id="root"></div>
</body>

<script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
+ <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
<script type="module">
  const rootEl = document.getElementById('root');
  const el = React.createElement(
    'div',
    {className: 'container'},
    'React',
  )
+  ReactDOM.render(el, rootEl);
</script>
```

## JSX

```diff
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
+  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
-  <script type="module">
-    const rootEl = document.getElementById('root')
-    const el= React.createElement(
-      'div',
-      {className: 'container'},
-      'React',
-    )
-    ReactDOM.render(el, rootEl);
-  </script>
```

```diff
<script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
+ <script type="text/babel">
+  const rootEl = document.getElementById('root');
+  const el = <div className="container">React</div>;
+  ReactDOM.render(el, rootEl);
+ <script>
```

## 전체 코드

[보기](https://jsbin.com/bolobupaki/edit?html,output)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>React Base</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>

  <script type="text/babel">
    ReactDOM.render(<div>React</div>, document.getElementById('root'));
  </script>
</html>
```
