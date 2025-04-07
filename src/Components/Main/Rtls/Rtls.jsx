import React from "react";
import Rtl from "./Rtl";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Rights() {
  return (
    <div>
      <div className="container my-12">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          slidesPerView={2}
          spaceBetween={40}
          loop={true}
          className="mySwiper"
        >
          
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
          <SwiperSlide>
            <Rtl></Rtl>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
