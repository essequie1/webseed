import React from "react";
import CSSLogo from "../assets/svg/CSS_Logo.svg";
import HTMLLogo from "../assets/svg/HTML_Logo.svg";
import JSLogo from "../assets/svg/JavaScript_Logo.svg";
import SASSLogo from "../assets/svg/Sass_Logo.svg";
import ReactLogo from "../assets/svg/React_Logo.svg";
import MySQLLogo from "../assets/svg/MySql_Logo.svg";
import TailwindLogo from "../assets/svg/Tailwind_Logo.svg";
import NodeLogo from "../assets/svg/Node_Logo.svg";
import MongoDBLogo from "../assets/svg/MongoDB_Logo.svg";

const Technologies = () => {
  return (
    <div className="technologies">
      <h2 className="technologies__title">The technologies we use</h2>
      <div className="technologies__container">
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={ReactLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">React</h4>
              <p className="tech__p">This is a technology that is used to develop user interfaces with all kinds of different features.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={NodeLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">NodeJS</h4>
              <p className="tech__p">Node is used as for server-side programming, for an event-driven server.</p>
            </div>
          </div>
        </div>
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={HTMLLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">HTML</h4>
              <p className="tech__p">Is what defines the general structure of the page and it's contents. Basically the skeleton of a webpage.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={CSSLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">CSS</h4>
              <p className="tech__p">Is what defines how the webpage looks, the colors, fonts, sizes, and some of the user interaction.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={JSLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">JavaScript</h4>
              <p className="tech__p">From user interaction to highly complex features, is what gives dynamism to a webpage.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={SASSLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">SASS</h4>
              <p className="tech__p">SASS is a CSS pre-processor, in other words, is CSS but with extra functionalities that make it better</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={TailwindLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">TailwindCSS</h4>
              <p className="tech__p">Tailwind is just a more simpler and faster way to write CSS.</p>
            </div>
          </div>
        </div>
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={MySQLLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">MySQL</h4>
              <p className="tech__p">MySQL is used to develop relational databases to store all the data your page needs.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={MongoDBLogo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">MongoDB</h4>
              <p className="tech__p">MongoDB is used to develop document-based databases, it's an alternative to relational databases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
