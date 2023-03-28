import React from 'react';
import img from '../assets/svg/ChooseUs.svg';

const ChooseUs = () => {
  return (
    <div id="chooseUs" className="chooseUs">
      <div className="chooseUs__content">
        <h2 className="chooseUs__title">Why Choose us?</h2>
        <p className="chooseUs__p">
          We take care of everything. We work with you, bring your ideas to life and develop the site from scratch until it is online. <br />
          We design, materialize and test. We deliver a final product according to your specifications and, most importantly, your objective.
        </p>
      </div>
      <img className="chooseUs_img" src={img} alt="choose us" />
    </div>
  );
};

export default ChooseUs;
