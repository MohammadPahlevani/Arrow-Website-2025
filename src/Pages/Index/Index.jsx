import React from "react";
import { useEffect, useState } from "react";
import MainNav from "../../Components/Main/MainNav/MainNav";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";

export default function Index() {
  const [scrollWindow, setScrollWindow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollWindow(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollWindow]);

  return (
    <div className="bg-gray-10 relative">
      <div
        className={`${
          scrollWindow > 100
            ? "fixed translate-y-0 w-full z-100"
            : "absolute -translate-y-21"
        } transition duration-400 delay-100`}
      >
        <MainNav></MainNav>
      </div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
