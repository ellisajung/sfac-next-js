import MovieCard from "./MovieCard";

type MovieAreaProps = {
  title: string;
};
const MovieArea = (props: MovieAreaProps) => {
  const { title } = props;
  return (
    <>
      <article className="bg-black py-10">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-4 gap-6">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
      </article>
    </>
  );
};
export default MovieArea;
