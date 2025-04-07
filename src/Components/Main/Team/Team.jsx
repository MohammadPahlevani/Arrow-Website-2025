import React, { useEffect, useState } from "react";
import Caption from "../../Caption";
import Person from "./Person";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setTeam(json.data.splice(13, 26)));
  }, []);

  return (
    <div className="my-25">
      <Caption title={"تیم ما"}></Caption>
      <div className="container my-20">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          {team.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <Person name={data.name} id={data.id} src={data.image}></Person>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
