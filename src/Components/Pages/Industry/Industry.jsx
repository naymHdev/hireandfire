import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const Industry = () => {
  return (
    <>
      <div className=" bg-industryHBg bg-cover bg-no-repeat bg-center py-20 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">Construction</h1>
          <nav className="mt-4 flex items-center gap-3 justify-center">
            <a href="/" className="text-white">
              Home
            </a>
            &raquo;
            <a href="#industry" className="text-white">
              Industry
            </a>
            &raquo;
            <a href="#construction" className="text-white">
              Construction
            </a>
          </nav>
        </div>
      </div>

      {/* Contact us section */}
      <section className="mt-20 max-w-7xl gap-14 text-black md:flex items-center justify-between px-4 md:px-6 lg:px-10">
        <div className=" flex-1 md:order-last">
          <div className=" flex-col justify-end items-center">
            <img
              className=" w-full h-auto"
              src="/public/Images/Image 1.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" flex-1 mt-6 md:mt-0">
          <h3 className=" text-xl md:text-3xl font-bold">
            Your Partner in international Construction Recruitment
          </h3>
          <p className=" text-sm mt-8">
            Hire & Fire Job s platform for the construction industry connects
            companies with skilled professionals globally. We streamline
            recruitment processes, ensuring precise matches for project
            requirements through our extensive network and industry specific
            expertise. Our platform offers tailored solutions for construction
            companies, facilitating efficient hiring and workforce management.
            Partner with us to access a pool of qualified talent and optimize
            your construction projects with ease.
          </p>
          <div className=" mt-8">
            <PrimaryButton text="Contact Us" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Industry;
