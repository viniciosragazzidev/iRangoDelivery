"use client";
import { IoMdStar } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SlideSimpleTypes } from "../_types/types";

const SlideSimpleItems = ({
  slideItems,
}: {
  slideItems: SlideSimpleTypes[];
}) => {
  console.log(slideItems);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{
        590: {
          slidesPerView: 2,
          spaceBetween: 300,
          slidesPerGroup: 1,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 300,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      freeMode={true}
      className="mySwiper "
    >
      {slideItems.map((item) => (
        <>
          <SwiperSlide key={item.id}>
            <div className="cardItem flex  gap-4 rounded-md  max-[540px]:w-full  w-min xl:w-[24rem]  h-40 items-center justify-start hover:bg-slate-50 hover:scale-105 transition-all cursor-pointer p-4">
              <div className="cardImg min-w-[7rem] min-h-[7rem] bg-yellow-400 rounded-md"></div>
              <div className="contentCard flex flex-col gap-2 py-2 h-full">
                <span className="title font-semibold max-w-[60%] whitespace-nowrap  block overflow-ellipsis">
                  {item.name}
                </span>
                <div className="statsItem flex gap-2 font-light items-center text-sm ">
                  <span className="note text-xs font-semibold text-yellow-500 flex  justify-center">
                    <span>
                      <IoMdStar />
                    </span>
                    <span>{item.avaliation}</span>
                  </span>
                  •<span className="categoryItem ">{item.category}</span>•
                  <span className="userDistance">{item.distance}km</span>
                </div>
                <div className="statsItem flex gap-2 font-light items-center text-sm ">
                  <span className="itemTime">
                    {item.timeSend[0]}-{item.timeSend[1]} Min
                  </span>
                  •
                  <span className="itemValueSend font-semibold">
                    {item.valueSend === 0 ? "Gratis" : `R$ ${item.valueSend}`}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
      <SwiperSlide>
        <div className=" hidden w-full rounded-lg p-4 text-lg max-[580px]:flex items-center justify-center cursor-pointer hover:scale-95 transition-all h-40 bg-slate-100">
          Ver mais
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideSimpleItems;
