# 코드 최적화

### script 태그 

- JS는 문서 하단에 위치
- JS 묶거나 캐싱 
- [defer](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script), async 속성 사용

### DOM

- 최대한 적게 접근
- [리플로우, 리페인트](https://github.com/wonism/TIL/blob/master/front-end/browser/reflow-repaint.md) 최소화
- [이벤트 위임방식](../dom/event.html#event-등록-방법) 사용 

### 그외 

- 정규표현식 최적화
- [setTimeout, setInterval](../js/global.html#settimeout-setinterval) 관리
- 자주 사용하는 변수 캐싱