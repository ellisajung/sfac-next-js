import Comments from "@/components/Comments";
import Posts from "@/components/Posts";
import { Suspense } from "react";

function Home() {
  return (
    <>
      <div>Home</div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Posts />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Comments />
      </Suspense>
    </>
  );
}

export default Home;
