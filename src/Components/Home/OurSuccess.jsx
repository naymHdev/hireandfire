const OurSuccess = () => {
  return (
    <section className="bg-white mt-28">
      <div className="mx-auto px-4 md:px-6 lg:px-10 max-w-7xl">
        <h2 className="text-4xl font-bold text-[#033C78] mb-4">Our Success</h2>
        <p className="text-xl font-medium text-red-600 mb-8">
          We believe that great companies are built by great people
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-5 items-center justify-center">
          <div className=" col-span-full md:col-span-3">
            <div className=" text-center md:text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 shadow-lg py-8 px-5">
              <div className="md:border-r border-dashed h-20 border-blue-800">
                <h2 className=" text-3xl font-bold text-[#033C78]">25,000 +</h2>{" "}
                <p className=" text-[#95AEC7] mt-1">Workers Placed</p>
              </div>
              <div className="md:border-r border-dashed h-20 border-blue-800">
                <h2 className=" text-3xl font-bold text-[#033C78]">20 +</h2>{" "}
                <p className=" text-[#95AEC7] mt-1">Globe Across</p>
              </div>
              <div className="md:border-r border-dashed h-20 border-blue-800">
                <h2 className=" text-3xl font-bold text-[#033C78]">300 +</h2>{" "}
                <p className=" text-[#95AEC7] mt-1">Trusted Partner</p>
              </div>
              <div>
                <h2 className=" text-3xl font-bold text-[#033C78]">15</h2>
                <p className=" text-[#95AEC7] mt-1">Year Experienced</p>
              </div>
            </div>
          </div>
          <div className=" col-span-full md:col-span-2 mt-5 md:mt-0">
            <img src="/public/Images/World-map2-a.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
