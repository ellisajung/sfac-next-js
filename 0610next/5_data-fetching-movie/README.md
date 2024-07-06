TMDB 회원가입
https://www.themoviedb.org/?language=ko

https://developer.themoviedb.org/reference/intro/getting-started

강사님 api 키 사용해서 헤더에 입력
node 코드 선택
나오는 코드 Server 컴포넌트에 복붙
퍼블리싱 화면에 적용하기 전에 데이터 불러와지는지 확인해보기

poster_path 값을 그대로 쓰면 안되고
앞에 `https://image.tmdb.org/t/p/w500` 붙여줘야
https://developer.themoviedb.org/docs/image-basics 문서 참고

- 새로고침해서 보면 깜빡임 없는 것을 볼 수 있음

# 실습해보기

- 아래 4가지 값 살펴보고
  popular
  upcoming
  now-play
  top-rated
- 위 4가지 데이터 불러오기
- 공통된 부분 최대한 줄이는 최적화
- 반응형 적용해보기
- 환경변수 관리하기

  - `npm install dotenv`

-

```tsx
const getPopularMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Y2MmM5YjMwM2IyYjYxODI4YmFmMTM1Nzc1ZWY4MiIsInN1YiI6IjY2Njc5M2VlMjgyYWY2NTJmMmQwMTkxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iurLMD9KuS4VOhVfLO6rgQpZL5X2TFMM7YEoG0Allmc",
    },
  };
  return await (await fetch(url, options)).json();
};

async function Popular() {
  const { results } = await getPopularMovies();
  console.log(results);
  return (
    <>
      <div>Popular</div>
      {results}
      {/* {results[0].title} */}
    </>
  );
}

export default Popular;
```

- 에러 내용
  ⨯ Internal error: Error: Objects are not valid as a React child (found: object with keys {adult, backdrop*path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count}). If you meant to render a collection of children, use an array instead.
  at a* (/Users/elisa/Documents/dev/sfac-next-study/0610next/6*data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:51035)
  at aj (/Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:53793)
  at aC (/Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:52874)
  at a* (/Users/elisa/Documents/dev/sfac-next-study/0610next/6*data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:50095)
  at aj (/Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:53793)
  at aC (/Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:52874)
  at a* (/Users/elisa/Documents/dev/sfac-next-study/0610next/6*data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:50095)
  at a* (/Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:50067)
  at /Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:58612
  at /Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:59270
  at aN (/Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:59278)
  at Timeout.\_onTimeout (/Users/elisa/Documents/dev/sfac-next-study/0610next/6_data-fetching-movie-prac/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:6939)
  at listOnTimeout (node:internal/timers:573:17)
  at process.processTimers (node:internal/timers:514:7)
  digest: "3634226585"
  GET / 500 in 76ms

- 이유
  리액트는 객체를 렌더링할 수 없다?
