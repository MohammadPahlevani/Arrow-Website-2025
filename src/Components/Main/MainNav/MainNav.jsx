import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navData } from "../../../datas";

export default function MainNav() {
  const [navName, setNavName] = useState(null);
  const [navDatas, setNavDatas] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const currentRoute = navData.find(
      (data) => data.route === location.pathname
    );
    if (currentRoute) {
      setNavName(currentRoute.name);
    }
    setNavDatas(navData);
  }, [location, navDatas]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="absolute w-full shadow-md">
      <div className=" py-5 bg-white">
        <div className="container flex justify-between items-center lg:justify-between">
          <Link to={"/"}>
            <img src="images/logo-dark.png" alt="site-logo" />
          </Link>
          <svg className="text-black size-8 lg:hidden">
            <use xlinkHref="#bars-3"></use>
          </svg>
          <div className="bg-black fixed top-0 left-0 right-0 bottom-0 z-100 overflow-scroll flex justify-center text-center py-7 mt-20 mx-5 scale-y-0 lg:hidden">
            <ul className="flex flex-col gap-10 font-Vazir-Bold text-sm text-white">
              {navData.map((data) => {
                return (
                  <li className="text-pink" key={data.id}>
                    <NavLink to={data.route}>{data.name}</NavLink>
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
                    onClick={handleClick}
                    className={(link) =>
                      link.isActive ? "text-pink" : "text-black"
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
    </div>
  );
}
