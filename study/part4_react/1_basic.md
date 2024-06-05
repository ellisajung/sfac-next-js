# JSX (JavaScript XML)

- syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
- ECMAScript라고 불리는 자바스크립트 표준의 일부가 아님 -> 즉, 자바스크립트 엔진이나 브라우저에 의해 실행되도록 만들어진 구문이 아님. -> 자바스크립트로 변환해주는 트랜스파일러(바벨) 필요
- 자바스크립트 내부에서 표현하기 까다로웠던 XML 스타일의 트리 구문을 작성을 용이하게 해주는 문법
- rule of JSX:
  1. Return a single root element
  2. Close all the tags
  3. camelCase all most of the things!
     - JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.
     - named after the corresponding DOM property
- JSX 컴포넌트 (4가지):
  1. JSXElement
  2. JSXAttributes (optional)
  3. JSXChildren
  4. JSXString
- JSX -> JS 변환 방식: https://babeljs.io/docs/babel-plugin-transform-react-jsx
- 이처럼 JSX는 독자적인 문법을 가진 JS 확장 구문으로, 리액트뿐만 아니라 다양한 라이브러리에서 채택되어 사용되고 있다.
- 하지만 우리에게 중요한 것은 JSX가 리액트에서 어떻게 사용되는지이므로 이정도만...

# 가상 DOM

(https://bioub.github.io/dom-visualizer/)

1. 가상 DOM이 만들어진 이유
2. 실제 DOM과의 차이점
3. 실제 DOM을 조작하는 것보다 빠른지
4. 가상 DOM의 이점

- 리액트가 주체가 되어 가상 돔을 2개 만들어 메모리에 적재
- 이 중 하나만 변경 사항을 업데이트하고 나머지 하나와 비교 후 달라진 부분만 확인 (Diffing)
- 달라진 부분만 잘라서 오리지널 돔에 변경 처리 (Patch update)
