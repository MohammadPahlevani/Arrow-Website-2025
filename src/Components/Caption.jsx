import React from "react";

export default function Caption({ title }) {
  return (
    <div className="relative flex flex-col items-center">
      <h2 className="font-Vazir-Bold tracking-tight pb-6 text-[27px] md:text-[38px] text-center">
        {title}
      </h2>
      <div className="absolute bottom-0 w-17 h-[1px] bg-pink"></div>
    </div>
  );
}
