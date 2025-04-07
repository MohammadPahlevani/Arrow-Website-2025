import React from "react";

export default function Image({ address }) {
  return (
    <div>
      <div className="relative group">
        <img src={address} alt="fall" />
        <div className="opacity-0 group-hover:opacity-100  transition-opacity bg-pink/80 absolute top-0 bottom-0 left-0 right-0 m-3">
          <div className="flex flex-col items-center text-white absolute top-30 left-30 gap-5">
            <h6 className="Font-Vazir-Light text-sm tracking-tight">
              برندسازی، گرافیک
            </h6>
            <div className="h-[1px] w-15 bg-white"></div>
            <h5 className="font-Vazir-Bold tracking-tight">نمونه‌کار 1</h5>
          </div>
          <div className="flex justify-end pl-4 absolute bottom-4 left-0 gap-2">
            <div className=" rounded-full p-1 bg-black text-white">
              <a href="#">
                <svg className="size-5">
                  <use xlinkHref="#search"></use>
                </svg>
              </a>
            </div>
            <div className=" rounded-full p-1 bg-black text-white">
              <a href="#">
                <svg className="size-5">
                  <use xlinkHref="#search"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
