import { benefits, jobRoles } from "../../../data/data";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import ContactForm from "./ContactForm";

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
      <section className="mt-20 max-w-7xl mx-auto gap-14 text-black md:flex items-center justify-between px-4 md:px-6 lg:px-10">
        <div className=" flex-1 md:order-last">
          <div className=" flex-col justify-end items-center">
            <img className=" w-full h-auto" src="/Images/Image 1.svg" alt="" />
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

      {/* Job Roles Section */}
      <section className="mt-28 max-w-7xl mx-auto px-4 md:px-6 lg:px-10 text-black">
        <div className=" text-center w-9/12 md:w-6/12 mx-auto">
          <h3 className=" text-xl md:text-3xl font-bold">Roles we Fil</h3>
          <p className=" text-sm mt-5">
            We fill roles in construction, matching skilled professionals like
            engineers, supervisors, and laborers to projects requiring expertise
            and efficiency.
          </p>
        </div>

        <div className=" mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobRoles.map((role, index) => (
              <div
                key={index}
                className={`bg-white rounded-md overflow-hidden shadow-lg p-2 flex flex-col justify-between ${
                  index >= jobRoles.length - 2
                    ? "sm:col-span-2 lg:col-span-2 mx-auto"
                    : ""
                }`}
              >
                <img
                  className="w-full h-auto object-cover"
                  src={role.image}
                  alt={role.title}
                />
                <div className="flex-grow text-center mt-3">
                  <h3 className="font-semibold mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {role.description}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-auto pb-3">
                  <button className="text-red-500 font-medium">
                    Contact Us
                  </button>
                  <img src="/public/Icons/Icon 3.svg" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BenefitsSection */}
      <section className="mt-28 bg-white max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="">
          <div className=" text-center w-9/12 md:w-6/12 mx-auto">
            <h3 className=" text-xl md:text-3xl font-bold">
              Benefits of Hiring Through Us
            </h3>
            <p className=" text-sm mt-5">
              Benefit from our efficient hiring process, matching qualified
              candidates to your construction projects, ensuring quality and
              reliability.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg text-center flex flex-col items-center p-2 border-b-8 border-red-500"
              >
                <div className=" -mt-12">
                  <div className=" border border-dotted rounded-full p-1 border-red-500">
                    <div className="bg-red-600 rounded-full p-4">
                      <img className=" w-8" src={benefit?.icon} alt="" />
                    </div>
                  </div>
                </div>
                <div className=" mt-5">
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="mt-28 bg-white max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <ContactForm />
      </section>
    </>
  );
};

export default Industry;
