import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MovieArea from "../components/MovieArea";
import Header from "../components/Header";

const Publish = () => {
  return (
    <>
      <Header />
      <Banner />
      <MovieArea title="Upcomming Movies" />
      <MovieArea title="NowPlaying Movies" />
      <MovieArea title="Popular Movies" />
      <Footer />
    </>
  );
};
export default Publish;
