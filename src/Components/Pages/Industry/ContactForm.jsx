import { MapPin } from "lucide-react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const ContactForm = () => {
  return (
    <>
      <div className="md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-8 shadow-lg rounded">
        <div className="col-span-3 bg-contactForm text-white px-8 py-10">
          <h4 className=" text-2xl font-semibold">Contact Us</h4>
          <p className=" text-sm font-medium my-2">
            Say Someting to start a live chat
          </p>
          <section className="mt-6 space-y-3">
            <div className=" flex justify-center gap-3">
              <div>
                <div className=" bg-blue-800 p-2 rounded shadow-sm">
                  <MapPin size={15} />
                </div>
              </div>
              <div>
                <h5 className="font-medium">Company Location</h5>
                <p className=" text-sm font-thin my-1">
                  Bucureşti Sectorul 1, Strada ING. ZABLOVSCHI, Nr. 10, BIROUL 1
                </p>
              </div>
            </div>
            <div className=" flex justify-center gap-3">
              <div>
                <div className=" bg-blue-800 p-2 rounded shadow-sm">
                  <MapPin size={15} />
                </div>
              </div>
              <div>
                <h5 className="font-medium">Phone Number</h5>
                <p className=" text-sm font-thin my-1">
                  biwigo7737@segichen.com
                </p>
              </div>
            </div>
            <div className=" flex justify-center gap-3">
              <div>
                <div className=" bg-blue-800 p-2 rounded shadow-sm">
                  <MapPin size={15} />
                </div>
              </div>
              <div>
                <h5 className="font-medium">Email Address</h5>
                <p className=" text-sm font-thin my-1">
                  biwigo7737@segichen.com
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className=" col-span-5">
          <form>
            <div className=" space-y-6 w-10/12 mx-auto mt-6">
              <input
                className=" rounded-lg border w-full px-3 py-2 border-black focus:outline-none"
                type="text"
                placeholder="First name"
              />
              <input
                className=" rounded-lg border w-full px-3 py-2 border-black focus:outline-none"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              <input
                className=" rounded-lg border w-full px-3 py-2 border-black focus:outline-none"
                type="number"
                name=""
                id=""
                placeholder="Phone Number"
              />
              <textarea
                className=" rounded-lg border w-full px-3 py-2 border-black focus:outline-none"
                name=""
                id=""
                placeholder="Write Your massage"
              ></textarea>
              <div className=" flex items-center justify-center pb-5 md:pb-0">
                <PrimaryButton type="submit" text="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
