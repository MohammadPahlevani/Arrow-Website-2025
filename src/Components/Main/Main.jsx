import React from "react";
import Welcome from "./Welcome/Welcome";
import Services from "./Services/Services";
import Features from "./Features/Features";
import Know from "./Know/Know";
import Samples from "./Samples/Samples";
import Done from "./Done/Done";
import Prices from "./Prices/Prices";
import Best from "./Best/Best";
import Points from "./Points/Points";
import Skills from "./Skills/Skills";
import Team from "./Team/Team";
import Blogs from "./Blogs/Blogs";
import Rtls from "./Rtls/Rtls";
import Contact from "./Contact/Contact";
import Forms from "./Forms/Forms";

export default function Main() {
  return (
    <div>
      <Welcome></Welcome>
      <Services></Services>
      <Features></Features>
      <Know></Know>
      <Samples></Samples>
      <Done></Done>
      <Prices></Prices>
      <Best></Best>
      <Points></Points>
      <Skills></Skills>
      <Team></Team>
      <Blogs></Blogs>
      <Rtls></Rtls>
      <Contact></Contact>
      <Forms></Forms>
    </div>
  );
}
