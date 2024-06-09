import { useEffect, useState } from "react";
import { useMovieStore } from "../stores/userMovieStore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { loading, fetchMovie, movies } = useMovieStore((state) => ({
    loading: state.loading,
    fetchMovie: state.fetchMovie,
    movies: state.movies,
  }));

  useEffect(() => {
    fetchMovie(page);
  }, [page]);

  return (
    <>
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        next Page
      </button>
      {!loading &&
        movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => {
              navigate(`/movie/${movie.id}`);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              width="200"
            />
            {movie.title}
          </div>
        ))}
    </>
  );
};
export default Home;
