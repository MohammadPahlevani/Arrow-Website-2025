import React, { useEffect, useState } from "react";
import Caption from "../../Caption";
import Blog from "./Blog";
import Button from "../../Button";

export default function Blogs() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://json.xstack.ir/api/v1/products")
      .then((response) => response.json())
      .then((json) => setBlog(json.data.splice(5, 3)));
  }, []);

  return (
    <div className="bg-gray-100/50 py-25">
      <Caption title={"بلاگ"}></Caption>
      <div className="container mt-15 mb-90 grid gap-77 md:gap-70 lg:grid-cols-3 lg:gap-8">
        {blog.map((data) => {
          return (
            <Blog
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
              src={data.image}
            ></Blog>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button text={"مشاهده همه مطالب"}></Button>
      </div>
    </div>
  );
}
