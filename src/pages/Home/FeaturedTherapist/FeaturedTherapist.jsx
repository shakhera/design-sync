import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TherapistModal from "./TherapistModal";

const FeaturedTherapist = () => {
  //   const [swiperRef, setSwiperRef] = useState(null);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (therapist) => {
    setSelectedTherapist(therapist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTherapist(null);
    setIsModalOpen(false);
  };

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
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        // virtual
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
                <div className="flex items-center justify-center my-2">
                  <button
                    onClick={() => openModal(therapist)}
                    className="btn btn-neutral btn-sm bg-[#4285F3]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedTherapist && (
        <TherapistModal
          therapist={selectedTherapist}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default FeaturedTherapist;
