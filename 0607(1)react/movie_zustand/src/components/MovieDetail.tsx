import { thumbnail02 } from "../assets/assets";
import MovieArea from "./MovieArea";

const MovieDetail = () => {
  return (
    <>
      <article className="flex justify-center items-end gap-4 bg-black min-h-[550px]">
        <section className="container flex gap-8 px-auto">
          <img src={thumbnail02} />
          <div className="flex flex-col justify-center text-white">
            <strong className="text-yellow-400 text-[26px]">
              New Episodes
            </strong>
            <h3 className="text-[60px] font-bold">The Star TreK</h3>
            <ul className="flex gap-3 text-lg text-[#e3dfdf]">
              <li>Comedi</li>
              <li>2022</li>
              <li>110min</li>
            </ul>
            <p className="mt-4 max-w-[80%]">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour.
            </p>
            <button className="border border-white rounded-md p-4 bg-gray-600 mt-6 max-w-[150px]">
              Watch Video
            </button>
          </div>
        </section>
      </article>
      <MovieArea title="Upcomming Movies" />
    </>
  );
};
export default MovieDetail;
