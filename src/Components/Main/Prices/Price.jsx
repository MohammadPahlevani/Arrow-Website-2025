import React from "react";
import Button from "../../Button";

export default function Price({ title, description, price, special }) {
  return (
    <div className="relative font-Vazir-Medium text-sm tracking-tight shadow-2xl flex flex-col gap-6 items-center px-8 pb-10">
      <h4 className="w-full text-center text-2xl border-b border-gray-300 pb-9 pt-13">
        {title}
      </h4>
      <div className="flex items-center gap-2 pt-8">
        <h5 className="text-4xl font-Vazir-Bold tracking-tight">{`${price},000`}</h5>
        <p>تومان</p>
      </div>
      <h6 className="py-2 text-pink">ماهانه</h6>
      <p className="line-clamp-3">{description}</p>
      {special ? (
        <>
          <Button text={"سفارش دهید"}></Button>
          <div className="absolute -top-5 rounded-md bg-pink w-4/5">
            <h6 className="py-2 text-center text-lg text-white">ویژه</h6>
          </div>
        </>
      ) : (
        <Button text={"سفارش دهید"} bg={"white"}></Button>
      )}
    </div>
  );
}
