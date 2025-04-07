import React from "react";

export default function Social() {
  return (
    <div className="relative size-9 group">
      <svg className="size-9 size-full bg-white/50 text-white rounded-full p-2 transition-all duration-400 delay-100 hover:bg-pink">
        <use xlinkHref="#telegram"></use>
      </svg>
      <span className="invisible font-Vazir-Thin text-[12px] text-black absolute -bottom-7 -right-8 py-1 transition-all duration-100 delay-100 px-2 rounded-sm bg-gray-300/50 group-hover:visible">
        تلگرام
      </span>
    </div>
  );
}
