import React, { useEffect, useState } from "react";
import Do from "./Do";

export default function Done() {
  const [done, setDone] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setDone(json.data.splice(10, 4)));
  }, []);

  return (
    <div
      className="relative  bg-center bg-no-repeat mt-30 mb-30"
      style={{ backgroundImage: "url('images/done.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="relative p-30 grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        {done.map((data) => {
          return (
            <Do
              key={data.id}
              title={data.name}
              id={data.id}
              src={data.image}
            ></Do>
          );
        })}
      </div>
    </div>
  );
}
