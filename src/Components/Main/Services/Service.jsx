import React from "react";

export default function Service({ title, image }) {
  return (
    <div className="flex flex-col items-center text-center tracking-tight text-white p-7 border rounded-md border-gray-800 bg-gray-600/30 font-Vazir-Bold">
      <img
        src={image}
        alt="image"
        className="mb-4 size-20 object-cover p-1 rounded-full transition duration-400 delay-100 hover:bg-pink"
      />
      <h4 className="line-clamp-1">{title}</h4>
    </div>
  );
}
