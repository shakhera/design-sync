import React from "react";
import FeaturedTherapist from "../FeaturedTherapist/FeaturedTherapist";
import FeaturedTestimonial from "../FeaturedTestimonial/FeaturedTestimonial";
import MassageTherapistSearch from "../MassageTherapistSearch/MassageTherapistSearch";

const Home = () => {
  return (
    <div>
      <MassageTherapistSearch/>
      <FeaturedTherapist />
      <FeaturedTestimonial/>
      
    </div>
  );
};

export default Home;
