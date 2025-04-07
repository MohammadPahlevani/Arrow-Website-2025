import React from "react";
import Nav from "../../Components/Nav";
import Welcome from "../../Components/Main/Welcome/Welcome";
import Footer from "../../Components/Footer/Footer";

export default function AboutUs() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Welcome></Welcome>
      <Footer></Footer>
    </div>
  );
}
