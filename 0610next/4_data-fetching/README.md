# data fetching - SC, CC에서 api를 호출하는 방법

## CC api를 호출하는 방법

https://jsonplaceholder.typicode.com/

- 찰나의 로딩을 피할 방법이 없음
- 리액트로 빌드된 무비 프로젝트 깃허브에 찾아보면 이런 최적화가 안된 경우 많이 찾아볼 수 있음

## SC api를 호출하는 방법

- api 콜이 서버에서 끝나기 때문에 찰나의 로딩이 없음
- 넥스트를 쓸 때는 리액트 쿼리 같은 라이브러리 쓰는 대신 서버컴포넌트로 API를 호출하는 방법을 최대한 활용해야 넥스트를 제대로 활용하는 것
- 넥스트가 최적화 이미 거의 다 구현해 놓음

- 리액트에서는 최적화를 위해 많은 api
