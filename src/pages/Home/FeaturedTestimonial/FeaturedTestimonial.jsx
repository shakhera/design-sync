import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import PopularCities from "../PopularCities/PopularCities";
import { FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FeaturedTestimonial = () => {
  const [showFullReview, setShowFullReview] = useState({});

  // fetch data
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => fetch("/testimonial.json").then((res) => res.json()),
  });
  // console.log(testimonials);

  const toggleReview = (id) => {
    setShowFullReview((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="lg:flex w-[398px] lg:w-[1030px] mx-auto mb-20 ">
      <div className="w-full lg:w-1/2">
        <section className="my-4">
          <SectionTitle heading="Featured Testimonial"></SectionTitle>
        </section>
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials
            .reduce((result, value, index, array) => {
              if (index % 2 === 0) result.push(array.slice(index, index + 2));
              return result;
            }, [])
            .map((pair, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-rows-2 gap-4">
                  {pair.map((testimony) => (
                    <div
                      key={testimony.id}
                      className="flex  md:w-[490px] border border-gray-100 bg-white p-2 rounded-md"
                    >
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimony.img}
                          alt={testimony.businessName}
                          className="w-[130px] h-[140px] rounded-md"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 lg:w-1/2 px-4 pt-3">
                        <p className="text-sm text-gray-600 flex items-center mb-2">
                          <FaMapMarkerAlt className="mr-1" />{" "}
                          {testimony.address}
                        </p>
                        <p className="text-lg font-semibold">
                          {testimony.businessName}
                        </p>

                        <p className="mt-2 text-sm">
                          {showFullReview[testimony.id]
                            ? testimony.review
                            : `${testimony.review.substring(0, 100)}...`}
                          {testimony.review.length > 100 && (
                            <button
                              onClick={() => toggleReview(testimony.id)}
                              className="text-blue-500 ml-1 focus:outline-none"
                            >
                              {showFullReview[testimony.id]
                                ? "Show Less"
                                : "Read More"}
                            </button>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="w-full lg:w-1/2">
        <PopularCities />
      </div>
    </div>
  );
};

export default FeaturedTestimonial;
