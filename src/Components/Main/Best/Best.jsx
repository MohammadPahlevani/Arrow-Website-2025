import React from "react";
import Button from "../../Button";

export default function Best() {
  return (
    <div
      className="relative bg-center bg-no-repeat pt-25 pb-30 px-5 md:px-50"
      style={{ backgroundImage: "url('images/done.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="relative flex flex-col gap-6 items-center">
        <h3 className="font-Vazir-Light tracking-tight text-pink text-xl">
          ما شرکتی خلاق هستیم
        </h3>
        <h2 className="font-Vazir-Bold tracking-tight text-white text-[27px] md:text-[38px]">
          با مهارت های ما آشنا شوید
        </h2>
        <p className="font-Vazir-Light tracking-tight leading-8 text-center text-tgray pb-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        </p>
        <Button text={"شروع کنید"}></Button>
      </div>
    </div>
  );
}
