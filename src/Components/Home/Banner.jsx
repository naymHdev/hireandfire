import { ChevronRight } from "lucide-react";

const Banner = () => {
  return (
    <>
      <div className=" md:flex items-center h-screen mt-6">
        <div className="bg-homeBannerBg w-full bg-cover bg-center bg-no-repeat h-screen relative flex items-center ">
          <div className="bg-[#24568A] w-full h-full min-h-screen opacity-80 absolute top-0 left-0" />
          <div className="text-white px-2 relative z-10 text-start">
            <h2 className="text-6xl font-semibold">
              Connecting <br /> Employers with Top <br /> Global Talent
            </h2>
            <p className="mt-4 font-medium">
              Bringing skilled workers to your business
            </p>
            <button className="py-3 px-6 bg-red-600 text-black hover:bg-blue-700 border-none rounded font-semibold flex items-center gap-2 mt-8">
              FINDS TALENTS <ChevronRight />
            </button>
          </div>
        </div>
        <div className="bg-homeBannerBgs w-full bg-cover bg-center bg-no-repeat md:h-screen"></div>
      </div>
      <div className="flex items-center w-11/12 md:w-6/12 md:pl-6 pt-4 bg-white md:-mt-20 md:absolute px-2 md:px-0 gap-3">
        <div className=" border-r border-black px-1">
          <h3 className=" text-xl md:text-3xl font-semibold text-[#033C78]">
            Workers Agency
          </h3>
          <p className=" font-medium mt-1">
            Connecting skilled workers from across the globe.
          </p>
        </div>
        <div className="md:px-16">
          <h3 className=" text-xl md:text-3xl font-semibold text-[#033C78]">
            Get Your Dream Job
          </h3>{" "}
          <p className=" font-medium mt-1">
            Get your dream job in your dream country
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
