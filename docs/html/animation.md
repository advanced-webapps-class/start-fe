# CSS 에니메이션
> CSS로 애니메이션을 만드는 것이 화면에서 움직임을 표현하는 가장 간단한 방법

```css
.box {
  -webkit-transform: translate(0, 0);
  -webkit-transition: -webkit-transform 500ms;

  transform: translate(0, 0);
  transition: transform 500ms;
}

.box.move {
  -webkit-transform: translate(100px, 100px);
  transform: translate(100px, 100px);
}
```


:::tip Link
- [Animate.css](https://daneden.github.io/animate.css/)
- [CSS 애니메이션 성능 개선 방법](http://wit.nts-corp.com/2017/06/05/4571)
- [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
:::