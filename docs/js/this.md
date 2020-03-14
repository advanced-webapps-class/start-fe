# this


### Global

```js
console.log(this); //this==window
```

### Function

```js
//함수를 호출
function test(){
    console.log(this); //this==window
}
```    

### Method

```js
var obj = {
    test : function(){
        console.log(this);  // this==obj
    }  
};
obj.test();
```

### Constructor
    
```js    
function Obj(){
    console.log(this); //this == obj
}
var obj = new Obj();
```

### call()
    
```js    
var obj = {
    test : function(){
        console.log(this);  // this==context
    }  
};
obj.test.call(context, arg);
```    

### apply()

```js
var obj = {
    test : function(){
        console.log(this);  // this==context
    }  
};
obj.test.apply(context, [arg]);
```

### html

```html
<div id="link" onclick="alert(this);return false;">링크</div>
```


