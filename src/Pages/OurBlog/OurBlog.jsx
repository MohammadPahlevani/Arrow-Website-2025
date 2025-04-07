import React from "react";
import Nav from "../../Components/Nav";
import Blogs from "../../Components/Main/Blogs/Blogs";
import Footer from "../../Components/Footer/Footer";

export default function OurBlog() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}
