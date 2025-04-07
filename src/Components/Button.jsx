import React from "react";

export default function Button({ text, bg = "pink" }) {
  return (
    <button
      className={`relative flex font-Vazir-Medium text-sm z-90 items-center rounded-full transition-all duration-400 delay-100 justify-center px-10 py-3 w-fit h-fit group ${
        bg === "pink"
          ? "hover:text-pink text-white border-1 border-pink"
          : "hover:text-white text-black border-pink border-1"
      }`}
    >
      {text}
      <span
        className={`visible absolute -z-100 w-full h-full scale-100 ${
          bg === "pink" ? "bg-pink" : "bg-white"
        } rounded-full transition-all duration-400 delay-100 group-hover:opacity-0`}
      ></span>
      <span
        className={`absolute w-full h-full -z-100 scale-0 scale-y-100 ${
          bg === "pink" ? "bg-white" : "bg-pink"
        } rounded-full transition-all duration-400 delay-100 group-hover:scale-100`}
      ></span>
    </button>
  );
}
