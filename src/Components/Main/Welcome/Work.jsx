import React from "react";

export default function Work({ title, description, image }) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg px-1 bg-white">
      <img
        src={image}
        alt="image"
        className="size-30 object-cover p-5 border rounded-full border-gray-300 border-dashed transition duration-400 delay-100 hover:bg-pink hover:border-pink"
      />
      <h4 className="font-Vazir-Bold tracking-tight text-xl mt-4 mb-4">
        {title}
      </h4>
      <p className="font-Vazir-Light tracking-tight leading-8 text-tgray line-clamp-3">
        {description}
      </p>
    </div>
  );
}
