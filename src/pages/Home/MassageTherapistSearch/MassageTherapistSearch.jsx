import React from "react";
import img from "../../../assets/therapist/img1.png";
import "./MessageTherapistSearch.css";

const MassageTherapistSearch = () => {
  return (
    <div className="px-6 rounded-md shadow-md flex flex-col lg:flex-row items-center justify-between bg-white w-[398px] lg:w-[1000px] mx-auto ">
      <div className="flex flex-col space-y-2  w-full lg:w-[587px] ">
        <h2 className="text-xl font-bold">
          I'm Looking for Massage Therapist Near...
        </h2>
        <p className="text-sm text-gray-600 md:w-2/3">
          In using this site, I agree to be bound by the{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex items-center space-x-2 mt-2 ">
          <input
            type="text"
            placeholder="ZIP code or city name"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-500 text-white rounded-md">GO</button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 bgImage">
        <img src={img} alt="Massage Therapy" className="w-[276px] h-[172px] p-4" />
      </div>
    </div>
  );
};

export default MassageTherapistSearch;
