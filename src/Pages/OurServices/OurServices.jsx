import React from "react";
import Nav from "../../Components/Nav";
import Services from "../../Components/Main/Services/Services";
import Footer from "../../Components/Footer/Footer";

export default function OurServices() {
  return (
    <div>
      <div className="pb-5 bg-black">
        <Nav></Nav>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}
