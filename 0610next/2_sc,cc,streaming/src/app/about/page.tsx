import ServerOne from "@/components/ServerOne";
import ServerTwo from "@/components/ServerTwo";
import { Suspense } from "react";

export default function About() {
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
