import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularCities = () => {
  const cities = [
    "Atlanta, GA",
    "Indianapolis, IN",
    "Philadelphia, PA",
    "Boston, MA",
    "Jacksonville, FL",
    "Queens, NY",
    "Chicago, IL",
    "Kansas City, MO",
    "Raleigh, NC",
    "Chicago, IL",
    "Los Angeles, CA",
    "San Antonio, TX",
    "El Paso, TX",
    "Miami, FL",
    "Tucson, AZ",
    "Fresno, CA",
    "Nashville, TN",
    "Upland, CA",
  ];

  return (
    <div className="mb-20">
      <section className="my-4">
        <SectionTitle heading="Popular Cities"></SectionTitle>
      </section>
      
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-md">
        {cities.map((city, index) => (
          <a
            key={index}
            href="#"
            className="block text-sm text-blue-600 hover:underline px-2 py-2  shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {city}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
