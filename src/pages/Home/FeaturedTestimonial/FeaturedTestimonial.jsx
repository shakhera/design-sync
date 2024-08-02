import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FeaturedTestimonial = () => {
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => fetch("/testimonial.json").then((res) => res.json()),
  });
  console.log(testimonials);

  return (
    <div className="flex">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold my-4">Featured Testimonial</h2>
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key={testimony.id}>
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="flex-shrink-0 lg:w-1/2">
                  <img
                    src={testimony.img}
                    alt={testimony.businessName}
                    className="w-full h-[300px] object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 lg:w-1/2 p-4">
                  <p className="text-lg font-semibold">
                    {testimony.businessName}
                  </p>
                  <p className="text-sm text-gray-600">{testimony.address}</p>
                  <p className="mt-2">{testimony.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-1/2">

      </div>
    </div>
  );
};

export default FeaturedTestimonial;
