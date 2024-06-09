import { banner_bg01 } from "../assets/assets";

const Banner = () => {
  return (
    <>
      <article>
        <section
          className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
          style={{ backgroundImage: `url(${banner_bg01})` }}
        >
          <div className="container mx-auto poppins text-white flex flex-col justify-center font-bold h-full">
            <h3 className="text-[30px] text-yellow-300">SUFLIX</h3>
            <h2 className="text-[60px] mb-4">
              Unlimited <span className="text-yellow-500">Movie</span>,
              <br />
              TVs SHows, & More
            </h2>
            <p className="text-2xl">
              An activity where all the movies in the world come together
            </p>
          </div>
        </section>
      </article>
    </>
  );
};
export default Banner;
