import React from "react";
import Nav from "../../Components/Nav";
import Best from "../../Components/Main/Best/Best";
import Footer from "../../Components/Footer/Footer";

export default function Introduction() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Best></Best>
      <Footer></Footer>
    </div>
  );
}
