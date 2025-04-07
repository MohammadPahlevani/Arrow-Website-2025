import React from "react";
import Social from "../Social";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="bg-gray-100/50 flex flex-col items-center gap-5 pt-10 pb-5">
        <Link to={"/"} onClick={handleClick}>
          <img className="pt-2" src="images/logo-dark.png" alt="site-logo" />
        </Link>
        <div className="flex gap-3">
          <Social></Social>
          <Social></Social>
          <Social></Social>
          <Social></Social>
          <Social></Social>
        </div>
        <p className="font-Vazir-Light text-sm text-tgray pb-5">
          ارائه شده در وب‌سایت راست‌چین
        </p>
      </div>
    </div>
  );
}
