import { useEffect, useState } from "react";
import "./Hero.scss";

function Hero() {
  const animation = idx => {
    const words = ["business", "community", "sales"];
    let container = document.getElementById("wordContainer");

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "bold 6rem serif";
    let text = ctx.measureText(words[idx]);

    container.animate([{ width: 0 }], { duration: 200, fill: "forwards", delay: 4000 });
    container.animate([{ width: 0 }, { width: text.width + "px" }], { duration: 200, fill: "forwards", delay: 5000 });

    setTimeout(() => {
      container.innerHTML = words[idx];
    }, 4500);
  };

  useEffect(() => {
    let idx = 0;
    setInterval(() => {
      animation(idx);
      if (idx < 2) {
        idx++;
      } else {
        idx = 0;
      }
    }, 5000);
  }, []);

  return (
    <div className="hero">
      <div className="hero__container">
        <h2 className="hero__container__title">grow your</h2>
        <p className="hero__container__word" id="wordContainer">
          sales
        </p>
      </div>
    </div>
  );
}

export default Hero;
