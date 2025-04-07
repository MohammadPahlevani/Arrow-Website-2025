import React, { useEffect, useState } from "react";
import Caption from "../../Caption";
import Point from "./Point";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Points() {
  const [point, setPoint] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setPoint(json.data.splice(0, 16)));
  }, []);

  return (
    <div className="my-25">
      <Caption title={"دیدگاه مشتریان"}></Caption>
      <div className="container my-20">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
        >
          {point.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <Point
                  description={data.description}
                  src={data.image}
                  name={data.name}
                  id={data.id}
                ></Point>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
