import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Play,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-28 ">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div>
          <div>
            <img
              className=" absolute w-11 md:w-16 h-auto left-16"
              src="/Icons/Logo.svg"
              alt=""
            />
          </div>
          <p className="text-[13px] mb-6 mt-20">
            Hire & Fire is a cutting-edge job website designed to connect
            employers with top-tier talent across various industries. Utilizing
            advanced matching algorithms, it streamlines the hiring process,
            ensuring quick and effective placements. Employers benefit from
            efficient tools for posting jobs, screening candidates, and managing
            applications. Ideal for businesses aiming for growth, Hire & Fire is
            your go-to resource for all recruitment needs. Please note that it
            operates on an employer basis and does not provide jobs directly to
            workers.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </div>

        <section className=" md:flex gap-5">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className=" border-b border-white w-10/12 mb-4" />
            <ul className="space-y-5 text-sm">
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#industries" className="hover:underline">
                  Industries We Serve
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#blog" className="hover:underline">
                  Blog & News
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className=" border-b border-white w-6/12 mb-4" />
            <ul className="space-y-5 text-sm">
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#permanent-recruitment" className="hover:underline">
                  Permanent Recruitment
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#contract-staffing" className="hover:underline">
                  Contract Staffing
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#housing-support" className="hover:underline">
                  Housing & Accommodation Support
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#compliance" className="hover:underline">
                  Compliance and Legal Support
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#workforce-planning" className="hover:underline">
                  Workforce Planning
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#background-checks" className="hover:underline">
                  Background Checks
                </a>
              </li>
              <li className=" flex items-center gap-1">
                <Play size={12} />
                <a href="#onboarding" className="hover:underline">
                  Onboarding Support
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <form className="mb-12">
            <label htmlFor="email" className="block text-sm my-4">
              Subscribe Our Newsletter to Get Latest Update & News
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                placeholder="Your Email Here"
                className="px-3 py-2 rounded-l bg-white text-black focus:outline-none"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r text-white flex items-center">
                Subscribe
              </button>
            </div>
          </form>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className=" bg-red-600 rounded-full p-1">
                <Phone className=" size-4" />
              </div>
              <span>+40 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <div className=" bg-red-600 rounded-full p-1">
                <Mail className="size-4" />
              </div>
              <span>contact@hireandfire.agency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className=" bg-red-600 rounded-full p-1">
                <MapPin className="size-4" />
              </div>
              <span>
                Strada ING. Zablovschi, Nr. 10, Biroul 1, Sectorul 1, Bucuresti,
                Romania.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-center md:text-left">
            © Copyright 2024 Hire & Fire All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#facebook" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
