# metadata

개념

- layout.tsx에 약속된 변수명 `metadata`로 정의 후 export
- 중첩 metadata의 경우 가장 가까운 메타데이터가 적용됨
- $s 라고 쓰면 가장 가까운 이름을 가져와 치환

정의 방법

1. 정적 메타데이터 객체 (export a static metadata object)
2. 동적 메타데이터 생성 함수 (export a dynamic generateMetadata function)

- 예를 들어 상품 상세페이지를 타이틀에 동적으로 포함시킬 때 2번 방법 사용

```tsx
export const metadata = {
  title: {
    template: "%s | sucoding",
    default: "Next.JS | sucoding",
    dedcription: "",
  },
};
```
