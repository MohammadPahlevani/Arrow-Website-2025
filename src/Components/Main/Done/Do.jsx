import React from "react";

export default function Do({ title, id, src }) {
  return (
    <div className="text-white flex flex-col items-center gap-7">
      <img
        src={src}
        alt="image"
        className="size-15 object-cover rounded-full"
      />
      <p className="font-Vazir-Bold text-4xl tracking-tight">{id}</p>
      <h4 className="font-Vazir-Medium text-lg tracking-tight">{title}</h4>
    </div>
  );
}
