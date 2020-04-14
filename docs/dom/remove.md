# dom 제거

## .remove()

```html
<div id="div1">1</div>
<div id="div2">2</div>

<script>
const el = document.getElementById('div1');
el.remove();
</script>
```

## .removeChild()

```html
<ul id="list">
<li>1</li>
<li>2</li>
</ul>

<script>
const list = document.getElementById('list'); 
list.removeChild(list.children[0]);
</script>
```
