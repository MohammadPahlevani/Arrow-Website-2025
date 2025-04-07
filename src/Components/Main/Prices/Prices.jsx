import React, { useEffect, useState } from "react";
import Caption from "../../Caption";
import Price from "./Price";

export default function Prices() {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setPrice(json.data.splice(15, 3)));
  }, []);

  return (
    <div className="my-25">
      <Caption title={"قیمت‌ها"}></Caption>
      <div className="container mt-20 grid gap-10 lg:grid-cols-3">
        {price.map((data) => {
          return (
            <Price
              key={data.id}
              title={data.name}
              description={data.description}
              price={data.id}
              special={data.id === 17 ? true : false}
            ></Price>
          );
        })}
      </div>
    </div>
  );
}
