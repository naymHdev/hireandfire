const OurSuccess = () => {
  return (
    <section className="bg-white mt-28">
      <div className="mx-auto px-4 md:px-6 lg:px-10 max-w-7xl">
        <h2 className="text-4xl font-bold text-[#033C78] mb-4">Our Success</h2>
        <p className="text-xl font-medium text-red-600 mb-8">
          We believe that great companies are built by great people
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-5">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:col-span-3">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900">25,000+</h3>
              <p className="text-gray-700">Workers Placed</p>
            </div>
            <div className="border-l-2 border-gray-300 h-12 hidden md:block"></div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900">20+</h3>
              <p className="text-gray-700">Globe Across</p>
            </div>
            <div className="border-l-2 border-gray-300 h-12 hidden md:block"></div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900">300+</h3>
              <p className="text-gray-700">Trusted Partner</p>
            </div>
            <div className="border-l-2 border-gray-300 h-12 hidden md:block"></div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900">15</h3>
              <p className="text-gray-700">Year Experienced</p>
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
