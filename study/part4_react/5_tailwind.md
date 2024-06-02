1. 패키지 설치
   `npm i -D tailwindcss`
   `npx tailwind init`

   - -D: `--save -dev`랑 같은 역할

2. 익스텐션 설치

- 테일윈드 클래스명이 어떻게 적용되는지 보임
- 클래스명 종류도 알려줌

# What's tailwind?

- 아토믹 디자인 패턴
- A utility-first CSS framework

## basic syntax

```css
// 방향
-t
-r
-b
-l

-y: -t + -b
-x: -r + -l

//
```

```css
button {
  background-color: #ccc; // bg-[#ccc]
  border: none; //
  color: black; // text-
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
```

- css 적용 방법 장단점
- 인라인
- 외부 파일
- 모듈
- tailwind

  - 단점
    - 모든 태그에 일일이 적용하기 때문에 유지/보수 어렵다
    - 가독성이 떨어진다
  - 장점
    - 모든 태그에 일일이 적용하기 때문에 유지/보수 어렵다 -> 컴포넌트 설계를 더 세세하게 나눔으로써 해결 가능 -> 따라서 컴포넌트 설계가 어느정도 구축이 된 다음에 적용하는 것이 좋음
    - 속성명 커스터마이징 지원
    - 태그에 직접 적용하여 후에 다른 데서 적용하고 싶을 때 해당 속성들 그래로 복붙만 하면됨.(스타일의 고유성 보장)
    - 따라서 다른 사람이 이미 만들어놓은 코드도 갖다쓰기 가능
    - 컴포넌트의 목적(아토믹 코드, 재사용성)과도 일치
    - 의존성이 높은 부트스트랩의 단점 보완. 부트스트랩도 유틸리티적 성격을 띠고는 있으나 테일윈드처럼 모든 속성에 대응하는 속성을 제공하지는 않음.

- 마이그레이션: 프레임워크 버전 업그레이드
