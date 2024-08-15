import { steps } from "../../data/data";

const HowItWorks = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 md:px-6 lg:px-10 mt-28">
        <h2 className=" text-center text-5xl my-16 font-bold">How It Works</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F3F5F8] shadow-sm hover:shadow-lg hover:transform rounded px-5 py-10 text-center"
            >
              <div className="">
                <h2 className=" text-2xl font-bold">{step.title}</h2>
                <p className=" font-medium mt-6">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
