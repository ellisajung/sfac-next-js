// "use client";
// 서버 컴포넌트일 경우 reset 함수가 정상적으로 실행되지 않는다

import ServerOne from "@/components/ServerOne";
import ServerTwo from "@/components/ServerTwo";
import { Suspense } from "react";

export default function About() {
  const random = Math.ceil(Math.random() * (4 - 1) + 1);
  console.log(random);
  if (random === 2) {
    throw new Error("random error");
  }
  return (
    <>
      <h1>About Pages</h1>
      <Suspense fallback={<h1 className="text-rose">suspense one loading</h1>}>
        <ServerOne />
      </Suspense>
      <Suspense fallback={<h1 className="text-blue">suspense one loading</h1>}>
        <ServerTwo />
      </Suspense>
    </>
  );
}
