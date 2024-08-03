import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FeaturedTherapist = () => {
  //   const [swiperRef, setSwiperRef] = useState(null);

  const {
    isLoading,
    error,
    data: therapists = [],
  } = useQuery({
    queryKey: ["therapists"],
    queryFn: () => fetch("/therapist.json").then((res) => res.json()),
  });
  console.log(therapists);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full lg:w-[1030px] mx-auto">
      <section className="my-4">
        <SectionTitle heading="Featured Therapists"></SectionTitle>
      </section>

      <Swiper
        className="w-[351px] lg:w-[1030px] mx-auto"
        modules={[Virtual, Navigation]}
        // onSwiper={setSwiperRef}
        // centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        virtual
      >
        {therapists.map((therapist, index) => (
          <SwiperSlide key={therapist.id} virtualIndex={index}>
            <div className="w-[214px] h-[303px] mx-auto">
              <div className="p-4 bg-white shadow-md rounded-md">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-[146px] rounded-md object-cover"
                />
                <h3 className="text-lg font-bold mt-2">{therapist.name}</h3>
                <p className="text-sm text-gray-600">{therapist.location}</p>
                <p className="text-sm text-gray-600">{therapist.serviceType}</p>
                <div>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedTherapist;
