import { useEffect } from "react";
import { useMovieStore } from "./stores/userMovieStore";

const App = () => {
  const { loading, fetchMovie, movies } = useMovieStore((state) => ({
    loading: state.loading,
    fetchMovie: state.fetchMovie,
    movies: state.movies,
  }));

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <h1>App Component</h1>
      {!loading && JSON.stringify(movies)}
    </>
  );
};
export default App;
