import React from "react";
import Nav from "../../Components/Nav";
import Contact from "../../Components/Main/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

export default function ContactUs() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
