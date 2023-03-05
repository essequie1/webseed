import React from "react";
import { useEffect } from "react";

const Hero = () => {
  const animation = count => {
    let container = document.getElementById("wordContainer");
    const words = ["business", "community", "sales"];
    container.animate([{ width: "100%" }, { width: 0 }], { duration: 200, fill: "forwards", delay: 4000 });
    container.animate([{ width: 0 }, { width: "100%" }], { duration: 200, fill: "forwards", delay: 5000 });
    setTimeout(() => {
      container.innerHTML = words[count - 1];
    }, 4500);
  };

  useEffect(() => {
    let count = 0;
    setInterval(() => {
      if (count > 2) {
        count = 1;
      } else {
        count = count + 1;
      }
      animation(count);
    }, 5000);
  }, []);

  return (
    <div className="hero">
      <div className="hero__container">
        <h2 className="title">grow your</h2>
        <div className="p__container">
          <p id="wordContainer" className="p">
            sales
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
