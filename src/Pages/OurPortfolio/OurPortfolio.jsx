import React from "react";
import Nav from "../../Components/Nav";
import Samples from "../../Components/Main/Samples/Samples";
import Footer from "../../Components/Footer/Footer";

export default function OurPortfolio() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Samples></Samples>
      <Footer></Footer>
    </div>
  );
}
