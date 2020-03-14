# dom 삽입 

## .appendChild()

```html
<div id="debug"></div>

<script>
const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);
</script>
```

## .innerHTML

- IE4에서 처음 구현된 비표준
- createElement(), appendChild()보다 편리
- 모든 브라우저에서 구현

```js
const text = '<span>hello</span>'; 
document.querySelector('#debug').innerHTML = text;
```