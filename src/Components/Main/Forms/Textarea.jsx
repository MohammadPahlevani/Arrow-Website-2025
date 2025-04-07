import React from "react";

export default function Textarea({ placeholder, register, errors }) {
  return (
    <textarea
      className={`${
        errors ? "border border-red-500" : ""
      } w-full h-full rounded py-5 px-4 outline-none`}
      name="message"
      id="message"
      cols="30"
      rows="4"
      placeholder={placeholder}
      {...register}
    ></textarea>
  );
}
