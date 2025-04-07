import React from "react";
import Nav from "../../Components/Nav";
import Done from "../../Components/Main/Done/Done";
import Footer from "../../Components/Footer/Footer";

export default function OurAchievements() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Done></Done>
      <Footer></Footer>
    </div>
  );
}
