import Image from "next/image";
import { thumbnail01 } from "../../public/assets/assets";
import { star } from "../../public/assets/assets";
import { TMovie } from "./MovieArea";
import React from "react";

// 최적화 여지 확인
let i = 1;
function MovieCard(props: TMovie) {
  // 최적화 여지 확인 - 한번에 100개까지 렌더링 됨
  // React.memo 사용
  console.log("movie card rendering : " + i++);
  const { title, poster_path, vote_average, release_date } = props;
  return (
    <>
      <div>
        <img
          src={
            `https://image.tmdb.org/t/p/w500/${poster_path}` || thumbnail01.src
          }
          alt=""
          className="rounded-md"
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="line-clamp-1 text-white">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src={star.src}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{vote_average.toFixed(1)}</span>
          </div>
          <span className="text-yellow-500 font-bold">
            {release_date.substr(0, 4)}
          </span>
        </div>
      </div>
    </>
  );
}
export default React.memo(MovieCard);
