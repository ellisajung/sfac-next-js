- 리액트/넥스트는 단방향 데이터 흐름 방식으로 동작하므로 형제 컴포넌트라는 개념이 없음
- 즉, 같은 계층에 있다고 하더라도 같은 부모를 공유할 뿐 형제 컴포넌트는 아니고, 따라서 서로 데이터를 주고 받을 수도 없음

- 서버 컴포넌트로 잘 작성했는지 확인하기 위한 가장 쉬운 방법은 async 붙여보는 것

```tsx
import { resolve } from "path";

async function ServerTwo() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>ServerTwo</div>;
}

export default ServerTwo;
```

- 위 코드에 'use client'를 붙이면 에러가 난다

- 컴포넌트 트리에서 클라이언트 컴포넌트의 하위 컴포넌트들은 본질적으로 서버 컴포넌트라 할지라도 클라이언트 컴포넌트가 됨.
- 따라서 넥스트에서 컴포넌트 트리를 설계할 때 클라이언트 컴포넌트는 가능한 한 뿌리에 위치하도록 설계해야 한다.
- 넥스트 14에서 가장 큰 변화는 서버 컴포넌트, 이를 최대한 활용해야

#

setTimeout 함수로 비동기 처리한 ServerOne, ServerTwo 컴포넌트의 렌더링 시간 확인해보기

- ServerOne 2초, ServerTwo 6초라고 설정했을 때 페이지 전체가 렌더링 되는 데 걸리는 시간은 6초이다.
- 즉, 사용자에게 화면이 보여지는 데 걸리는 시간은 컴포넌트 중 렌더링 되는 데 가장 오래 걸리는 컴포넌트의 렌더링 시간과 같다.
- 이것의 단점은 렌더링이 적게 걸리는 컴포넌트도 오래 걸리는 컴포넌트의 렌더링 시간을 기준으로 렌더링 된다는 것이다.
- 또 다른 단점은 각 컴포넌트의 개별 렌더링 시간을 디버깅하기 어렵다는 것
- 이에 등장한 개념이 스트리밍(streaming)이다.// parallel rendering 병렬 처리
- 이를 구현하기 위한 방법 1은 단순히 loading 컴포넌트 파일을 생성해주기만 하면 된다.
- loading 컴포넌트를 생성한 라우트 별로 개별적으로 렌더링 가능 - loading 페이지가 생겨난 이유.
- 또 다른 방법은 리액트 18에서 생긴 suspense 컴포넌트를 사용하는 것
- 구현 방법은 suspense를 적용하고자 하는 컴포넌트를 Suspense 컴포넌트로 감싸주기만 하면 된다.

- loading(넥스트) vs suspense(리액트)
- 리액트 lazy load에서 suspense를 사용
- 리액트보단 넥스트의 loading을 쓰는 것이 좋음
- 사실 넥스트의 loading 컴포넌트도 suspense 기능을 wrapping한 기능일 가능성이 높음

- suspense에 컴포넌트를 fallback으로 넣어줄 수도 있음
- 이 컴포넌트에 스켈레톤 컴포넌트를 넣어줄 수도 있음

- 무조건 병렬처리를 하는 것이 효율적일까?

- 이러한 병렬 처리와 함께 **스켈레톤 처리**까지 해줄 수도 있음. 대표적인 예시가 유튜브

# loading.tsx 페이지 생성하기

react-icons
https://react-icons.github.io/react-icons/search/#q=loading

tailwind animation
https://tailwindcss.com/docs/animation - animate-spin 적용

이외에 다른 에니메이션도 써볼 것

- animate-ping - 알림 효과
- animate-pulse - 부드러운 렌더링 효과. **스켈레톤**(skeleton loaders)에 많이 적용됨
- animate-bounce - “scroll down” indicators
