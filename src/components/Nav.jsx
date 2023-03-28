import React from 'react';
import { NavLogo } from './NavLogo';

const Nav = () => {
  return (
    <div className="nav">
      <NavLogo />
      <nav>
        <a href="#whyWeb">Why a webpage?</a>
        <a href="#chooseUs">Why Choose Us?</a>
        <a href="#whatWeDo">What we do</a>
        <a href="#techStack">What we use</a>
        <a href="#stages">How we work</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Nav;
