import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white relative py-2">
      <div className=" mx-auto px-4 md:px-6 lg:px-10 max-w-7xl">
        <div className="flex justify-between items-center">
          <div>
            <NavLink
              to="/"
              className="flex items-center py-5 px-2 text-gray-700"
            >
              <img
                className=" absolute w-11 md:w-16 h-auto"
                src="/Icons/Logo.svg"
                alt=""
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending py-5 px-3"
                  : isActive
                  ? "text-red-500 py-5 px-3"
                  : ""
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/employers"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending py-5 px-3"
                  : isActive
                  ? "text-red-500 py-5 px-3"
                  : ""
              }
            >
              <div className=" flex items-center">
                <p>Employers</p>
                <img src="/Icons/Icon 1.svg" alt="" />
              </div>
            </NavLink>
            <NavLink
              to="/find-worker"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending py-5 px-3"
                  : isActive
                  ? "text-red-500 py-5 px-3"
                  : ""
              }
            >
              <div className=" flex items-center">
                <p>Find Worker</p>
                <img src="/Icons/Icon 1.svg" alt="" />
              </div>
            </NavLink>
            <NavLink
              to="/industry"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending py-5 px-3"
                  : isActive
                  ? "text-red-500 py-5 px-3"
                  : ""
              }
            >
              Industry
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending py-5 px-3"
                  : isActive
                  ? "text-red-500 py-5 px-3"
                  : ""
              }
            >
              <div className=" flex items-center">
                <p>Resources</p>
                <img src="/Icons/Icon 1.svg" alt="" />
              </div>
            </NavLink>
            <NavLink
              to="#contact"
              className="py-2 px-4 bg-blue-900 text-white rounded hover:bg-blue-700"
            >
              Contact Us
            </NavLink>
            <button className=" flex items-center">
              <img
                src="/Icons/Country Icon.svg"
                alt="flag"
                className="w-6 h-6"
              />
              <img src="/Icons/Icon 1.svg" alt="" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-500" />
              ) : (
                <Menu className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <NavLink
            to="#about"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
          >
            About Us
          </NavLink>
          <NavLink
            to="#employers"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
          >
            Employers
          </NavLink>
          <NavLink
            to="#find-worker"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
          >
            Find Worker
          </NavLink>
          <NavLink
            to="#industry"
            className="block py-2 px-4 text-sm text-red-600 hover:bg-red-200"
          >
            Industry
          </NavLink>
          <NavLink
            to="#resources"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
          >
            Resources
          </NavLink>
          <NavLink
            to="#contact"
            className="block py-2 px-4 text-sm bg-blue-900 text-white"
          >
            Contact Us
          </NavLink>
          <button className="block py-2 px-4 text-sm">
            <img
              src="/Icons/Country Icon.svg"
              alt="flag"
              className="w-6 h-6 mx-auto"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
