import React, { useEffect, useState } from "react";
import Progres from "./Progres";
import { progresData } from "../../../datas";

export default function ToKnow() {
  const [progres, setProgres] = useState(progresData);

  return (
    <div className="flex flex-col items-center pt-25 lg:flex-row lg:items-start lg:gap-20">
      <div className="w-9/10 border border-10 border-white">
        <img
          ssName="flex items-center justify-center pr-10"
          src="images/know.jpg"
          alt="know-image"
        />
      </div>
      <div>
        <div className="my-15 px-5 md:px-8 lg:mt-0 lg:px-0">
          <div>
            <h3 className="font-Vazir-Light text-xl text-pink tracking-tight mb-5">
              ما شرکتی خلاق هستیم
            </h3>
            <h2 className="font-Vazir-Bold pb-8 tracking-tight text-[27px] md:text-[38px]">
              با مهارت‌های ما آشنا شوید
            </h2>
          </div>
          <p className="font-Vazir-Light tracking-tight leading-8 text-tgray">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای
          </p>
        </div>
        <div className="flex flex-col w-full gap-10 mb-25 px-5 md:px-8 lg:px-0">
          {progres.map((data) => {
            return (
              <Progres
                key={data.id}
                title={data.title}
                percent={data.percent}
              ></Progres>
            );
          })}
        </div>
      </div>
    </div>
  );
}
