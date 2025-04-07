import React from "react";
import Caption from "../../Caption";

export default function WelcomeTo() {
  return (
    <div>
      <h3 className="font-Vazir-Light tracking-tight text-xl text-center mt-25 mb-5 md:text-3xl">
        به شرکت ما خوش آمدید
      </h3>
      <Caption title={"ما کیستیم و چه کاری انجام می‌دهیم؟"}></Caption>
      <p className="font-Vazir-Light tracking-tight leading-8 text-center mt-8 mb-23 px-10 text-tgray md:px-16 lg:px-40 xl:px-59">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
      </p>
    </div>
  );
}
