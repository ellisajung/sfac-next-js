4. not-found 페이지 생성하기

# 루트 not-found 페이지 생성

## layout.tsx

- 루트 layout에 테일윈드가 정의된 global.css를 임포트
- 하위 레이아웃, 페이지 및 컴포넌트에서 테일윈드 사용 가능

## react-icons

https://react-icons.github.io/react-icons/

설치
--save 옵션을 사용하면 'dependencies'에 설치가 된다
--save -dev 옵션을 사용하면 'devDependencies'에 설치가 된다

- 둘 중 어디에 설치가 되든 dev 모드에선 아무런 문제가 발생하지 않지만 production 모드에선 문제가 발생할 수 있음.
- 그냥 시키는대로 해...

사용

- 원하는 아이콘을 클릭해보면 사용방법 다 나옴

아이콘 폰트란

- 폰트 기반으로 만들어진 아이콘
- 따라서 폰트 스타일을 적용하여 변경이 자율적으로 가능

## Reset

- 기본적인 적용되는 css를 제거하는 것?
- 현재는 중요성 낮아짐

### 에릭 마이어의 reset - 구

## Router

# 특정 라우트에서 not-found 페이지 생성

- slug 활용하여 우회하여 생성할 수 있음

5. 라우트 & 메타데이터 & not-found 실습

http://localhost:3000 -> title: "Next.JS 14 | Sucoding", description: "Let's learn next.js"
http://localhost:3000/login -> title: "Login | Sucoding"
http://localhost:3000/register -> title: "Register | Scoding"
http://localhost:3000/password -> root not found

http://localhost:3000/blog -> title: "Blog | Sucoding"
http://localhost:3000/blog/1 -> title: "Blog 1 | Sucoding"
http://localhost:3000/blog/2 -> title: "Blog 2 | Sucoding"

http://localhost:3000/blog/read -> blog not found
-> [포괄적 경로] or 1, 2, 3처럼 숫자가 아니고 read처럼 문자열이오면 ...

루트 레이아웃에 위 경로를 이동할 수 있는 Link 컴포넌트도 모두 작성해주세요.

// 내코드 오류

- 메인 레이아웃에 만든 blog 1, blog 2 링크를 누르면 메타데이터 적용 안됨. 주소창에 직접 치면 적용됨
- layout에 children 안받음
  - 이랬을 때 문제가 page가 layout으로 대체?
- read 문자열 슬러그 처리 안됨. 동적 라우팅으로 처리됨.
  - 이경우 슬러그로는 해결할 방법 없음
  - 자바스크립트 로직으로 처리 (강사님 코드 참고)
  - return 문을 작성하지 않으면 read 라우트로 들어갔을 때 순간적으로 read가 보임
  - return 문을 쓰면 이 현상 사라짐
  - 하지만 use client를 쓰므로 권장하진 않음
  - 대신 redirect 써서 해결하면 use client, return 문 안쓰고 해결 가능
  - 문제 오류라서 우회하여 해결한 방법
