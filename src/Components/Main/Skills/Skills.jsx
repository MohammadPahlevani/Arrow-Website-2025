import React, { useEffect, useState } from "react";
import Button from "../../Button";
import Skill from "./Skill";

export default function Skills() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setSkill(json.data.splice(10, 4)));
  }, []);

  return (
    <div
      className="relative pt-25 pb-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/adv.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="container gap-7 relative lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="flex flex-col gap-6 items-start text-white lg:pt-5">
          <h3 className="font-Vazir-Light tracking-tight text-xl">
            ما شرکتی خلاق هستیم
          </h3>
          <h2 className="font-Vazir-Bold tracking-tight text-[27px] md:text-[38px]">
            با مهارت های ما آشنا شوید
          </h2>
          <div className="font-Vazir-Light tracking-tight leading-8">
            <p className="pb-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون
            </p>
          </div>
          <Button text={"شروع کنید"}></Button>
        </div>
        <div className="grid gap-7 mt-10 md:grid-cols-2 lg:mt-0">
          {skill.map((data) => {
            return (
              <Skill
                key={data.id}
                title={data.name}
                description={data.description}
                src={data.image}
              ></Skill>
            );
          })}
        </div>
      </div>
    </div>
  );
}
