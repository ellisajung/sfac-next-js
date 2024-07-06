import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MovieArea from "@/components/MovieArea";

const getMovies = async (type: string) => {
  const data = await (
    await fetch("http://localhost:3000/api/movies?type=" + type)
  ).json();
  return data;
};

export default async function Home() {
  // const popular = await getMovies("popular");
  // const top_rated = await getMovies("top_rated");
  // const upcoming = await getMovies("upcoming");
  // const now_playing = await getMovies("now_playing");

  const [
    { results: popular },
    { results: top_rated },
    { results: upcoming },
    { results: now_playing },
  ] = await Promise.all([
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
    getMovies("now_playing"),
  ]);

  console.log(upcoming);
  return (
    <>
      <Header />
      <Banner />
      <MovieArea title={"POPULAR"} movies={popular} />
      <MovieArea title={"TOP RATED"} movies={top_rated} />
      <MovieArea title={"UPCOMING"} movies={upcoming} />
      <MovieArea title={"NOW PLAYING"} movies={now_playing} />
    </>
  );
}
