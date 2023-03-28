import { React, Node, HTML, CSS, JS, Sass, Tailwind, MySQL, Mongo } from '../assets/svg/svgIndex';

const tech = [React, Node, HTML, CSS, JS, Sass, Tailwind, MySQL, Mongo];

const Technologies = () => {
  return (
    <div id="techStack" className="technologies">
      <h2 className="technologies__title">The technologies we use</h2>
      <div className="technologies__container">
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={React} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">React</h4>
              <p className="tech__p">Is a library that allows developers to create visually stunning user interfaces for the web.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Node} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">NodeJS</h4>
              <p className="tech__p">Provides a robust runtime environment that allows websites to perform optimally and efficiently</p>
            </div>
          </div>
        </div>
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={HTML} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">HTML</h4>
              <p className="tech__p">Is a markup system that creates structured the content, images, and multimedia elements for web pages.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={CSS} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">CSS</h4>
              <p className="tech__p">Is used to define the style for websites by choosing colors, fonts, animations, and layouts.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={JS} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">JavaScript</h4>
              <p className="tech__p">Is used to add special effects and functions to websites, overall is used for user interactivity.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Sass} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">SASS</h4>
              <p className="tech__p">Is a powerful preprocessor that enhances the functionalities and the maintenance of CSS.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Tailwind} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">TailwindCSS</h4>
              <p className="tech__p">An intuitive CSS framework that offers an extensive set of pre-designed styles for crafting stunning designs.</p>
            </div>
          </div>
        </div>
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={MySQL} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">MySQL</h4>
              <p className="tech__p">Is a high-performance database management system that provides efficient and scalable data storage.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Mongo} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">MongoDB</h4>
              <p className="tech__p">Is a versatile database that provides flexible and dynamic data storage for modern web applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
