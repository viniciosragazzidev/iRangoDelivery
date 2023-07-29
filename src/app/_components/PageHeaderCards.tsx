"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const PageHeaderCards = () => {
  return (
    <div className="px-10  pl-28 max-lg:pl-10">
      <Swiper
        className=""
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1020: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card w-full h-36 sm:h-56   bg-red-500 rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-full h-36 sm:h-56   bg-orange-500 rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-full h-36 sm:h-56  bg-yellow-500 rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-full h-36 sm:h-56  bg-green-500 rounded-md"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PageHeaderCards;
