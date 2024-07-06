# cache

https://nextjs.org/docs/app/building-your-application/caching

- 넥스트는 **렌더링**과 **데이터 요청**을 캐싱함으로써 최적화
- By default, Next.js will cache as much as possible to improve performance and reduce cost.
  근데 캐싱 비용은 고려 안해?
- 캐싱을 이해하는 것은 넥스트를 잘 활용하는 데 필수적이지 않은데, 이는 넥스트가 별도의 설정 없이도 사용하는 API에 따라 최적의 퍼포먼스를 제공하기 때문이다

# 캐싱 매커니즘 - 4가지

## Request Memoization

- 하나의 렌더링에서 동일한 api 콜을 기억

## Data Cache

## Full Route Cache

- 서버에서 보다 안정적으로 더 오래 보관

## Router Cache

- 새로고침하면 없어짐
- 풀라우트 캐시와 보완 관계

- in-memory, RSC payload
- MISS - 라우트 캐싱하지 않음
- HIT - 풀라우트 캐싱하지 않음
- PARTIAL HIT - 풀라우트 캐싱하지 않음

### Full Route Cache vs Router Cache

- 라우터 캐시는 유저 세션이 유지되는 동안 브라우저에 일시적으로 RSC 페이로드를 보관하고
- 풀 라우터 캐시는 여러번의 유저 요청에 걸쳐 더 오랫동안 RSC 페이로드와 HTML을 서버에 보관

- 풀 라우터 캐시가 정적으로 렌더링된 라우트만 캐싱하는데 반해,
- 라우터 캐시는 정적 및 동적으로 렌더링된 라우트 모두에 적용된다

- 정적 렌더링: 라우트가 빌드타임에 렌더링되는 것
- 동적 렌더링: 라우트가 요청되는 시점에 각 유저에게 렌더링되는 것

# 캐싱 설정 API

# 캐싱 간 관계

- 나중에 서버 액션을 이해하는 데 캐싱시스템 중요
- 쿼리 빌더 패키지들도 보통 자체 캐싱시스템을 가지고 있음
- 둘다 쓸 경우 캐싱 디버깅이 힘들기 때문에 캐싱을 철저하게 관리할 능력이 안되면 쓰지 않는 것을 권장

- 넥스트의 fetch는 리액트의 fetch와 다름
- 넥스트는 자신들의 캐싱시스템에 맞게 fetch 기능 확장
- 따라서 axios를 쓰면 넥스트가 구현한 최적화를 활용할 수 없다

# 캐시 무력화기법

케이스 1 - revalidate

사용예시

- 유튜브 구독자 수를 실시간으로 업데이트할 필요 없음. 이 경우 revalidate 값을 3600 \* 24처럼 설정하여 24시간마다 업데이트되도록 설정할 수 있음
-

revalidatePath

- 무력화할 경로를 지정해줘야하는 단점 존재

revalidateTag

- 무력화하

## 서버액션에서 무력화할 수 있는 시스템
