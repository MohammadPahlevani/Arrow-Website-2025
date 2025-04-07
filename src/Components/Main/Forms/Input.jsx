import React from "react";

export default function Input({ placeHolder, register, errors }) {
  return (
    <input
      className={`${
        errors ? "border border-red-500" : ""
      } bg-gray-100 rounded py-3 px-4 outline-none`}
      type="text"
      placeholder={placeHolder}
      {...register}
    />
  );
}
