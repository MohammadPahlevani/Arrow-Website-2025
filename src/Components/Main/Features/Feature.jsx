import React from "react";

export default function Feature({ title, description, image }) {
  return (
    <div>
      <div className="flex items-center">
        <img
          src={image}
          alt="image"
          className="size-15 object-cover rounded-full transition duration-400 delay-100 hover:bg-pink"
        />
        <h4 className="font-Vazir-Bold text-xl tracking-tight mr-5">{title}</h4>
      </div>
      <div className="w-11 h-[1px] bg-gray-300 mr-20 mb-4 mt-1"></div>
      <p className="font-Vazir-Light tracking-tight leading-8 text-tgray mr-20 line-clamp-3">
        {description}
      </p>
    </div>
  );
}
