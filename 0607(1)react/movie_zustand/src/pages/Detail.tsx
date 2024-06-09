import { useEffect } from "react";
import { useMovieStore } from "../stores/userMovieStore";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const videos = useMovieStore((state) => state.videos);
  const fetchMovieById = useMovieStore((state) => state.fetchMovieById);
  const fetchVideoById = useMovieStore((state) => state.fetchVideoById);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching started");

      const start = Date.now();
      const moviePromise = fetchMovieById(params.id || "");
      const videoPromise = fetchVideoById(params.id || "");

      console.log("Movie fetch initiated at:", Date.now() - start, "ms");
      console.log("Video fetch initiated at:", Date.now() - start, "ms");

      try {
        await Promise.all([moviePromise, videoPromise]);
        console.log("Both fetches completed at:", Date.now() - start, "ms");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieById(params.id || "");
    fetchVideoById(params.id || "");
    // fetchData();
  }, []);

  return (
    <>
      <h1>Detail Component</h1>
      {videos
        .filter((video) => video.site === "YouTube")
        .splice(0, 1)
        .map((video) => (
          <div key={video.id}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/68xkEZ4-nAs?si=${video.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        ))}
    </>
  );
};
export default Detail;
