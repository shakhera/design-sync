import React from "react";
import { Link } from "react-router-dom";
import errorPage from "../assets/error/error.gif";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <img src={errorPage} alt="error" className="w-96 mb-8" />
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary bg-[#4285F3] text-white px-4 py-2 rounded-md">
        Return to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
