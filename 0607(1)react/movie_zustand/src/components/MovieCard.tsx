import { thumbnail01 } from "../assets/assets";

const MovieCard = () => {
  return (
    <div>
      <img src={thumbnail01} alt="" className="rounded-md" />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="">The Beachball</h4>
        <span className="text-yellow-500 ">2022</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-200">
        <span>Comedy</span>
        <span>120min</span>
      </div>
    </div>
  );
};
export default MovieCard;
