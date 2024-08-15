/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Error = ({ errorMessage = "Page Not Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100 px-4">
      <div className="text-center">
        <div className="mt-12 flex justify-center">
          <img
            src="/Images/404 Error with a cute animal-amico.svg"
            alt="Error Illustration"
            className="w-full max-w-md object-cover"
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          Oops! {errorMessage}
        </h2>
        <p className="mt-4 text-gray-600">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
