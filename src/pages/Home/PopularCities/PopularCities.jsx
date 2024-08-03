import React from "react";

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
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Popular Cities</h2>
      <div className="grid grid-cols-3 gap-3">
        {cities.map((city, index) => (
          <a
            key={index}
            href="#"
            className="text-sm  text-blue-600 underline "
          >
            {city}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
