# Setup

`npm init -y`

- 기본 값으로 npm 초기화
- 실행하면 _package.json_ 파일 생성됨

`npm install typescript --save-dev`

- 개발모드로 설치
- 실행하면 _node_modules_ 폴더 생성됨

`node ./node_modules/typescript/bin/tsc --init`

- 타입스크립트 초기화
- 실행하면 _tsconfig.json_ 파일 생성됨

# package.json

```json
  "devDependencies": {
    "typescript": "^5.4.5"
  }
```

- devDependencies

# ts -> js 컴파일

- tsc 명령어 사용해서 ts 파일 트랜스파일 하려면
  ts를 글로벌로 설치해야함(--g)
- js 파일 생성 경로 설정???

`node ./node_modules/typescript/bin/tsc index.ts`

`npx tsc`

- dist 폴더 생성되어 변환된 Js 파일 들어감
- npx(npm execute)
- 로컬에 깔려있는 tsc 명령어 참조하여 실행

# extension

- tailwind intellisense
- thunder client

# node_modules

- npm으로 특정 라이브러리를 설치할 떄, node_modules에 의존성이 있는 라이브러리들까지 자동으로 설치됨
- typescript 경우 의존성이 없음
- 배포를 할 때는 package.json 파일만 배포가 되고 해당 파일로 나머지 빌드할 수 있음

# tsconfig.json
