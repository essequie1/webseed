import React from "react";

const Hero = () => {
  const handleChange = () => {
    let word = document.getElementsByClassName("p")[0];
    let textWidth = word.offsetWidth;
    console.log(textWidth);
    word.classList.add("changeWord");
    setTimeout(() => {
      word.innerHTML = "business";
      word.classList.remove("changeWord");
    }, 600);
  };
  return (
    <div className="hero">
      <div className="hero__container">
        <h2 className="title">grow your</h2>
        <div className="p__container">
          <p className="p">sales</p>
        </div>
      </div>

      <button onClick={handleChange}>change</button>
    </div>
  );
};

export default Hero;
