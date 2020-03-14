# CSS Media query
> 디바이스의 특성을 이용해 스타일시트의 적용범위를 제한, 반응형 웹페이지

```html
<!-- link요소에 있어서의 CSS 미디어 쿼리 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- 스타일 이벤트 내의 CSS 미디어 쿼리 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
```

:::tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries)
[반응형웹사이트 모음](https://mediaqueri.es/)
:::