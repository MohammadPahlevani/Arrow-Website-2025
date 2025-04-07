import React from "react";
import Nav from "../Nav";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/bg.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <Nav></Nav>
      <div className="container relative flex flex-col items-center z-50 mt-20 gap-7 md:mt-20 xl:mt-40">
        <h1 className="text-white font-Vazir-Bold text-xl tracking-tight md:text-5xl lg:text-6xl">
          ما یک شرکت خلاق هستیم
        </h1>
        <p className="text-white font-Vazir-Light text-center tracking-tight leading-8 md:px-12 lg:px-33">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
        </p>
        <Link to={"/prices"}>
          <Button text="شروع کنید"></Button>
        </Link>
      </div>
    </div>
  );
}
