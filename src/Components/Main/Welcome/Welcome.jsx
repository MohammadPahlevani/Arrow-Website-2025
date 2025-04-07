import React, { useEffect, useState } from "react";
import WelcomeTo from "./WelcomeTo";
import Work from "./Work";

export default function Welcomes() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setWork(json.data.splice(0, 3)));
  }, []);
  
  return (
    <div className="my-25">
      <WelcomeTo></WelcomeTo>
      <div className="container grid gap-12 lg:grid-cols-3">
        {work.map((data) => {
          return (
            <Work
              title={data.name}
              description={data.description}
              image={data.image}
              key={data.id}
            ></Work>
          );
        })}
      </div>
    </div>
  );
}
