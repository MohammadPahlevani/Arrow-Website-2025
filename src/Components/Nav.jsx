import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../datas";

export default function Nav() {
  const [navDatas, setNavDatas] = useState(navData);
  const [bar, setBar] = useState(false);

  const handleClick = () => {
    setBar((prevState) => !prevState);
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div>
      <div
        className={`container relative top-0 pt-5 flex justify-between items-center lg:justify-between`}
      >
        <Link to={"/"}>
          <img src="images/logo-light.png" alt="site-logo" />
        </Link>
        <svg className="text-white size-8 lg:hidden" onClick={handleClick}>
          <use xlinkHref="#bars-3"></use>
        </svg>
        <div
          className={`${
            bar ? "h-screen" : "h-0 w-0"
          } transition duration-400 delay-100 bg-black fixed top-0 left-0 right-0 bottom-0 z-100 flex justify-center text-center py-15 mt-21 mx-5 lg:hidden`}
        >
          <ul className="flex flex-col gap-10 font-Vazir-Bold text-sm text-white overflow-y-scroll w-full">
            {navDatas.map((data) => {
              return (
                <li key={data.id}>
                  <NavLink
                    to={data.route}
                    onClick={handleScroll}
                    className={(link) =>
                      link.isActive ? "text-pink" : "text-white"
                    }
                  >
                    {data.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="hidden lg:flex font-Vazir-Bold text-sm gap-4.5 xl:gap-7">
          {navDatas.map((data) => {
            return (
              <li key={data.id}>
                <NavLink
                  to={data.route}
                  className={(link) =>
                    link.isActive ? "text-pink" : "text-white"
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
