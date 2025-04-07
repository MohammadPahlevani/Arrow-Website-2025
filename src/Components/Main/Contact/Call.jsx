import React from "react";
import Me from "./Me";
import Social from "../../Social";

export default function Call() {
  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat px-10 py-25"
      style={{ backgroundImage: "url('images/contact.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="relative flex flex-col gap-5">
        <h2 className="font-Vazir-Bold text-white text-3xl tracking-tight">
          تماس با ما
        </h2>
        <p className="font-Vazir-Light tracking-tight leading-8 text-tgray pb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        </p>
        <div className="flex flex-col gap-10 pb-5">
          <Me></Me>
          <Me></Me>
          <Me></Me>
        </div>
        <div className="flex gap-4">
          <Social></Social>
          <Social></Social>
          <Social></Social>
          <Social></Social>
          <Social></Social>
        </div>
      </div>
    </div>
  );
}
