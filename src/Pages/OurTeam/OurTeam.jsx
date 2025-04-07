import React from "react";
import Nav from "../../Components/Nav";
import Team from "../../Components/Main/Team/Team";
import Footer from "../../Components/Footer/Footer";

export default function OurTeam() {
  return (
    <div>
      <div className="bg-black pb-5">
        <Nav></Nav>
      </div>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}
