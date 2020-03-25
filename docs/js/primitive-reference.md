# 원시,참조타입

## 원시타입

> Primitive Type

변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터의 값(value) 보관

- [Number](datatype.md#Number)
- [String](datatype.md#String)
- [Boolean](datatype.md#Boolean)
- [null](datatype.md#null)
- [undefined](datatype.md#undefined)

## 참조타입

> Reference Type

변수에는 데이터에 대한 참조(reference)만 저장

- [Object](datatype.md#Object)
- [Array](datatype.md#Array)
- [Function](datatype.md#Function)

```js
// 값 value
var a = 1;
var b = a;
b = 2;
console.log(a, b);

var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

// 참조 reference
var a = { x: 1 };
var b = a;
b.x = 2;
console.log(a, b);
```

```js
//call by value
function byValue(count) {
  count = count + 2;
}
var count = 3;
byValue(count);
console.log(count); //3

//call by reference
function byReference(count) {
  count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count); // ["1","2"]
```
