import React from "react";
import Nav from "../../Components/Nav";
import Prices from "../../Components/Main/Prices/Prices";
import Footer from "../../Components/Footer/Footer";

export default function OurPrices() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Prices></Prices>
      <Footer></Footer>
    </div>
  );
}
