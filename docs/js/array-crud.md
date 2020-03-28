# 배열 CRUD

> Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말, [위키](https://ko.wikipedia.org/wiki/CRUD)

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
