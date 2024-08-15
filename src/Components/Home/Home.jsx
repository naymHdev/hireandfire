import Banner from "./Banner";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <HowItWorks />
        <div className=" mt-10 w-full md:h-screen">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/993888624?h=3483257270"
            width="100%"
            height="100%"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
