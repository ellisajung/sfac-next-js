# 로그인 컴포넌트 만들기

```jsx
import "./Button.css";

const Button = () => {
  // login -> true : "Logout"
  // login -> false : "Login"
  const login = true;
  return (
    <>
      {/* 방법 1 */}
      <button className={login ? "active" : ""}>
        {login ? "Logout" : "Login"}
      </button>
      {/* 방법 2 */}
      {login ? (
        <button className="active">Logout</button>
      ) : (
        <button>Login</button>
      )}
    </>
  );
};

export default Button;
```

# 컴포넌트 단위

- 디자인 시스템에 따라 다름
- 정해진 규격이 있다면 버튼 하나라도 컴포넌트로 분리하는 게 좋음

# 리액트 컴포넌트 css 스타일링 방법

1. 인라인 스타일

- 속성 카멜케이스 변경
- 세미콜론 -> 콜론

```jsx
const Button = () => {
  return (
    <button
      style={{
        backgroundColor: "#ccc",
        border: "none",
        color: "black",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
      }}
    >
      Login
    </button>
  );
};

export default Button;
```

2. 외부 스타일 (css 파일)

- css 파일 생성 후 사용하는 곳에서 import
- 단점: 컴포넌트에서 css import할 경우 전역 적용이 됨

3. css 모듈

- .css -> .module.css
- 태그 선택자 -> 클래스 선택자
- 모듈 방식으로 하면 자동으로 클래스명이 해싱되어 적용

```jsx
import styles from "./Button.module.css";

const Button = () => {
  return <button className={styles.button}>Login</button>;
};

export default Button;
```

4. tailwind 라이브러리
   - scss랑 같이 사용하기 - https://www.mridul.tech/blogs/how-to-use-scss-with-tailwind-in-next-js
5. 구글 폰트
   - 사용할때 폰트 페밀리만 남기고, 세부적인 설정은 테일윈드로 가능
6. css-in-js
   참고 - https://www.samsungsds.com/kr/insights/web_component.html

- styled-component
  - "dependencies"에 추가됨 ->배포할 때 참고하여 빌드된다는 것을 알 수 있음
  - 장점: scss 지원
  - 단점: html 구조를 가시적으로 파악하기 어려움
- emotion
  - styled-component 가지는 단점을 보완
  - 인라인으로 코드 가독성 나쁨
- vanilla extract
  - 제로 런 타임
