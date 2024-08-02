import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bg1 from "../../assets/login/bg2.jpeg";
import bg2 from "../../assets/login/bg1.jpeg";
import { Link } from "react-router-dom";

const AuthPagination = () => {
  return (
    <div className="w-full">
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
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="relative">
              <img
                src={bg1}
                alt="Create your account"
                className="w-full h-[622px] object-cover blur-md"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 p-4 rounded flex flex-col items-center justify-center">
                  <p>
                    <Link to="/signup" className="text-[#156BCA]">
                      Create Account
                    </Link>
                  </p>
                  <p className="text-white">Fill in Your Information</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="relative">
              <img
                src={bg2}
                alt="Create your account"
                className="w-full h-[622px] object-cover blur-md"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 p-4 rounded flex flex-col items-center justify-center">
                  <p>
                    <Link to="/signup" className="text-[#156BCA]">
                      Create Account
                    </Link>
                  </p>
                  <p className="text-white">Fill in Your Information</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="relative">
              <img
                src={bg2}
                alt="Create your account"
                className="w-full h-[622px] object-cover blur-md"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                
              <div className="bg-black bg-opacity-50 p-4 rounded flex flex-col items-center justify-center">
                  <p>
                    <Link to="/signin" className="text-[#156BCA]">
                      Sign In
                    </Link>
                  </p>
                  <p className="text-white">
                    to view all the massage therapists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AuthPagination;
