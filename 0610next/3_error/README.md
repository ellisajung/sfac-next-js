https://nextjs.org/docs/app/api-reference/file-conventions/error

# error 컴포넌트

- 컴포넌트의 에러가 발생할 경우 처리되는 컴포넌트
- 경로마다 중첩해서 지정 가능
- 가장 가까운 경로의 error 컴포넌트가 실행된다
- error와 reset을 props로 받아서 사용한다
- error는 객체고, reset은 함수이다
- reset 함수를 실행하면, 이전 컴포넌트를 다시 불러온다
- 다른 라우팅 방법과 차이점?
- 단, 이전 컴포넌트가 '클라이언트 컴포넌트'일 경우에만 해당된다

# error props 객체

## error prop - 객체

## reset prop - 함수

# 실습

# Error 객체 프로퍼티 & 메서드

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
