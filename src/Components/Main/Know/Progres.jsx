import React from "react";

export default function Progres({ title, percent }) {
  return (
    <div className="w-full font-Vazir-Medium text-sm tracking-tight flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <p>{title}</p>
        <p>{`${percent}%`}</p>
      </div>
      <div className="h-3 border border-[1px] border-gray-200 bg-white rounded-md">
        <span
          className="block border border-[2px] rounded-md border-gray-200 h-3 bg-red-500"
          style={{ width: `${percent}%` }}
        ></span>
      </div>
    </div>
  );
}
