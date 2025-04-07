import React, { useEffect, useState } from "react";
import Image from "./Image";
import { sampleData } from "../../../datas";

export default function Sample() {
  const [sample, setSample] = useState(sampleData);
  const [imageSrc, setImageSrc] = useState(sampleData[0].src);
  const [imageID, setImageID] = useState(sampleData[0].id);

  const handleClick = (id) => {
    setImageID(id);
  };

  useEffect(() => {
    let data = sample.filter((data) => data.id === imageID);
    setImageSrc(data[0].src);
  }, [imageID]);

  return (
    <div>
      <ul className="font-Vazir-Medium tracking-tight flex items-center mb-15 justify-center">
        {sample.map((data) => {
          return (
            <li
              key={data.id}
              className={`${
                imageID === data.id ? "bg-pink text-white" : ""
              } rounded-full px-5 py-2 transition duration-400 delay-100`}
              onClick={() => handleClick(data.id)}
            >
              <button>{data.title}</button>
            </li>
          );
        })}
      </ul>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {imageSrc.map((data) => {
          return <Image key={data.id} address={data.address}></Image>;
        })}
      </div>
    </div>
  );
}
