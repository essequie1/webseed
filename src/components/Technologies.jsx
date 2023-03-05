import { React, Node, HTML, CSS, JS, Sass, Tailwind, MySQL, Mongo } from "../assets/svg/svgIndex";

const tech = [React, Node, HTML, CSS, JS, Sass, Tailwind, MySQL, Mongo];

const Technologies = () => {
  return (
    <div className="technologies">
      <h2 className="technologies__title">The technologies we use</h2>
      <div className="technologies__container">
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={React} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">React</h4>
              <p className="tech__p">This is a technology that is used to develop user interfaces with all kinds of different features.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Node} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">NodeJS</h4>
              <p className="tech__p">Node is used as for server-side programming, for an event-driven server.</p>
            </div>
          </div>
        </div>
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={HTML} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">HTML</h4>
              <p className="tech__p">Is what defines the general structure of the page and it's contents. Basically the skeleton of a webpage.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={CSS} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">CSS</h4>
              <p className="tech__p">Is what defines how the webpage looks, the colors, fonts, sizes, and some of the user interaction.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={JS} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">JavaScript</h4>
              <p className="tech__p">From user interaction to highly complex features, is what gives dynamism to a webpage.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Sass} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">SASS</h4>
              <p className="tech__p">SASS is a CSS pre-processor, in other words, is CSS but with extra functionalities that make it better</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Tailwind} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">TailwindCSS</h4>
              <p className="tech__p">Tailwind is just a more simpler and faster way to write CSS.</p>
            </div>
          </div>
        </div>
        <div className="tech__stack">
          <div className="tech">
            <img className="tech__logo" src={MySQL} alt="" />
            <div className="tech__content">
              <h4 className="tech__title">MySQL</h4>
              <p className="tech__p">MySQL is used to develop relational databases to store all the data your page needs.</p>
            </div>
          </div>
          <div className="tech">
            <img className="tech__logo" src={Mongo} alt="" />
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
