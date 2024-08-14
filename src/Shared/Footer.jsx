
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-28">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HIRE & FIRE</h2>
          <p className="text-sm mb-6">
            Hire & Fire is a cutting-edge job website designed to connect
            employers with top-tier talent across various industries. Utilizing
            advanced matching algorithms, it streamlines the hiring process,
            ensuring quick and effective placements.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:underline">
                Industries We Serve
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog & News
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#permanent-recruitment" className="hover:underline">
                Permanent Recruitment
              </a>
            </li>
            <li>
              <a href="#contract-staffing" className="hover:underline">
                Contract Staffing
              </a>
            </li>
            <li>
              <a href="#housing-support" className="hover:underline">
                Housing & Accommodation Support
              </a>
            </li>
            <li>
              <a href="#compliance" className="hover:underline">
                Compliance and Legal Support
              </a>
            </li>
            <li>
              <a href="#workforce-planning" className="hover:underline">
                Workforce Planning
              </a>
            </li>
            <li>
              <a href="#background-checks" className="hover:underline">
                Background Checks
              </a>
            </li>
            <li>
              <a href="#onboarding" className="hover:underline">
                Onboarding Support
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <form className="mb-6">
            <label htmlFor="email" className="block text-sm mb-2">
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
                Subscribe <Send className="ml-2" />
              </button>
            </div>
          </form>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>+40 123 456 789</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>contact@hireandfire.agency</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
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
