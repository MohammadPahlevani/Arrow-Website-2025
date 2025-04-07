import React, { useEffect, useState } from "react";
import Service from "./Service";
import Caption from "../../Caption";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Services() {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setService(json.data.splice(3, 20)));
  }, []);

  return (
    <div
      className="relative bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/bg2.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="text-white pt-25 pb-18">
        <Caption title={"خدمات ما"}></Caption>
      </div>
      <div className="px-5 md:px-22 lg:px-60">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
        >
          {service.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <Service title={data.name} image={data.image}></Service>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative grid px-5 mt-15 pb-25 md:grid-cols-2 md:px-13 md:gap-4 lg:gap-0 lg:px-25">
        <div>
          <h3 className="font-Vazir-Light tracking-tight text-pink text-xl mb-5">
            طراحی وب خلاقانه
          </h3>
          <h2 className="font-Vazir-Bold tracking-tight text-white pb-8 text-[27px] md:text-[38px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </h2>
        </div>
        <div>
          <p className="font-Vazir-Light tracking-tight leading-8 text-tgray">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان
          </p>
          <p className="font-Vazir-Light tracking-tight leading-8 text-tgray">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
        </div>
      </div>
    </div>
  );
}
