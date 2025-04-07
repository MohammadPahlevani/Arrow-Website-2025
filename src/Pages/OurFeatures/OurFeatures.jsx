import React from "react";
import Nav from "../../Components/Nav";
import Features from "../../Components/Main/Features/Features";
import Footer from "../../Components/Footer/Footer";

export default function OurFeatures() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}
