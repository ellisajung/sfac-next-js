"use client";

import { useRouter } from "next/navigation";
import { MdError } from "react-icons/md";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center min-h-screen">
        <MdError className="text-[100px] text-rose-500" />
        <h1 className="text-[50px] font-bold">...앗...</h1>
        <p className="max-w-[300px] text-lg">
          이 페이지는 사라졌거나 다른 페이지로 변경되었어요. 주소를 다시 확인해
          주세요.
        </p>
        <div className="flex gap-4 mt-4">
          <button
            className="w-[95px] bg-blue-500 rounded-md text-lg p-4 text-white"
            onClick={() => router.back()}
          >
            이전으로
          </button>
          <button
            className="w-[95px]  bg-rose-500 rounded-md text-lg p-4 text-white"
            onClick={() => router.push("/")}
          >
            홈으로
          </button>
        </div>
      </div>
    </>
  );
}
