# set-up

## 직접 구축

프로젝트 폴더 생성
npm 초기화
`npm init -y`
next.js 패키지 설치
`npm install react@latest next@latest react-dom@latest`
package.json 파일 수정
`"dev": "next dev"`

## 보일러 플레이트 사용하여 구축

`npx create-next-app@latest <폴더명>`
`npx create-next-app@latest .`

![alt text](image-3.png)

- 장점 : 편리하다
- 단점
  - npm 사이트의 create-next-app에 들어가보면 다른 패키지에 의존을 많이 하고 있다는 것을 알 수 있음.
  - 구조를 바꾸면 에러가 날 수도 있음.

### 보일러 플레이트란?

- 반복적으로 사용하는 프로젝트 구성을 구축할 수 있게 지원하는 패키지
- 리액트 : create-app, cretate-vite
- 넥스트 : create-next-app

# 컴포넌트 템플릿 스니펫 설정

커멘드라인 > typescriptreact.json
