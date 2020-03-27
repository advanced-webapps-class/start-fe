# 배열

```js
var arr = [1, 2, 3];

// new Array() 비권장( 모호하다)
var arr = new Array(1, 2, 3); // [1,2,3]
var arr = new Array(3); // []  // [], arr.lenght=3
console.log(arr.length); //3

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## CRUD

### Create

```js
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);
```

### Read

```js
var todos = ['운동', '게임'];
todos.forEach(function(todo) {
  console.log(todo);
});
```

### Update

```js
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);
```

```js
var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) {
  if (todo === updateTodo) {
    return '공부';
  }
  return todo;
});

console.log(newTodos);
```

### Delete

```js
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);
```

```js
var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
  return todo !== delteTodo;
});
console.log(newTodo);
```

::: tip Link
[MDN 배열 메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
:::
