import { useEffect } from "react";
import { Nav, Hero, CallToAction, ChooseUs, WhatWeDo, Technologies, Stages, Contact, Footer } from "./components/index";

function App() {
  useEffect(() => {
    let nav = document.getElementsByClassName("nav")[0];
    let window = document.querySelector(".app");
    let groupLetters = document.querySelector("#group-letters");
    let s = document.querySelector("#s");
    let stages = document.getElementsByClassName("stages")[0];

    window.addEventListener("scroll", () => {
      if (window.scrollTop > 250) {
        groupLetters.classList.add("translateLetters");
        s.classList.add("translateS");
      } else {
        groupLetters.classList.remove("translateLetters");
        s.classList.remove("translateS");
      }
      if (window.scrollTop == stages.offsetTop) {
        stages.style.backgroundColor = "#EFF5E9";
        nav.style.boxShadow = "inset 0 -4px 4px #00000025";
      } else {
        stages.style.backgroundColor = "";
        nav.style.boxShadow = "";
      }
    });
  });

  return (
    <div className="app">
      <Nav></Nav>
      <Hero></Hero>
      <CallToAction></CallToAction>
      <ChooseUs></ChooseUs>
      <WhatWeDo></WhatWeDo>
      <Technologies></Technologies>
      <Stages></Stages>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
