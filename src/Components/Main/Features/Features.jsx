import React, { useEffect, useState } from "react";
import Caption from "../../Caption";
import Feature from "./Feature";

export default function Features() {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setFeature(json.data.splice(11, 6)));
  }, []);

  return (
    <div className="my-25">
      <Caption title={"ویژگی‌های منحصر به فرد"}></Caption>
      <div className="container grid gap-10 mt-15 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {feature.map((data) => {
          return (
            <Feature
              key={data.id}
              title={data.name}
              description={data.description}
              image={data.image}
            ></Feature>
          );
        })}
      </div>
    </div>
  );
}
