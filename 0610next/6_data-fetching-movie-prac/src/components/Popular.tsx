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
