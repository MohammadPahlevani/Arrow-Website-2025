import React from "react";
import Button from "../../Button";

export default function Blog({ id, name, description, src }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="group overflow-clip w-full">
        <img
          className="w-full object-cover h-70 overflow-clip transition-all duration-400 delay-100 group-hover:scale-110"
          src={src}
          alt="blog"
        />
      </div>
      <div className="absolute w-full px-3 -bottom-65 md:-bottom-57 lg:-bottom-63">
        <div className="relative shadow-lg flex flex-col gap-5 bg-white px-7 py-15">
          <div className="flex gap-4 items-end ">
            <h6 className="font-Vazir-Bold tracking-tight text-5xl text-pink">
              {id}
            </h6>
            <p className="font-Vazir-Light tracking-tight leading-8 text-tgray text-[10px]">
              دی 1397
            </p>
          </div>
          <h5 className="font-Vazir-Medium tracking-tight text-xl text-gray-600 line-clamp-2">
            {description}
          </h5>
          <div className="flex items-center gap-2">
            <svg className="text-pink size-4">
              <use xlinkHref="#pencil"></use>
            </svg>
            <p className="font-Vazir-Light tracking-tight leading-8 text-tgray text-sm">
              {name}
            </p>
          </div>
          <div className="self-end absolute -bottom-5">
            <Button text={"ادامه مطلب"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
