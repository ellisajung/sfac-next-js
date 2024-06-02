window
navigation alert dom

html 파싱
dom 트리

# getElementById vs querySelector

- 현재는 유의미한 성능 차이 없음

```js
const hEl = document.querySelector("h1");
hEl.style.color = "blue";
// 인라인으로 스타일 추가됨
```
