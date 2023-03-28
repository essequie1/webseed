import React from 'react';
import Stage1 from '../assets/svg/Stage1.svg';
import Stage2 from '../assets/svg/Stage2.svg';
import Stage3 from '../assets/svg/Stage3.svg';
import Stage4 from '../assets/svg/Stage4.svg';
import flap from '../assets/svg/flap.svg';

const Stages = () => {
  const stageSelector = e => {
    let child = e.target.parentNode;
    let parent = child.parentNode;

    // Get event children position (0 - 3)
    let index = Array.prototype.indexOf.call(parent.children, child);
    let nSiblings = [child];
    let pSiblings = [child];

    for (let i = 0; i < 3 - index; i++) {
      let sib = nSiblings[i];
      nSiblings.push(sib.nextSibling);
    }

    for (let i = 0; i < index; i++) {
      let sib = pSiblings[i];
      pSiblings.push(sib.previousSibling);
    }

    pSiblings.shift();
    pSiblings.reverse();
    pSiblings.map((elm, i) => {
      setTimeout(() => {
        elm.style.transform = 'translateX(-90vw)';
      }, 100 * i);
    });

    nSiblings.reverse();
    nSiblings.map((elm, i) => {
      setTimeout(() => {
        elm.removeAttribute('style');
      }, 100 * i);
    });
  };

  return (
    <div id="stages" className="stages">
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 1
        </button>
        <h3 className="stage__title">Briefing</h3>
        <p className="stage__p">
          This is where the client and the web development team come together to discuss the project goals, audience, content, and design preferences. In this
          stage, the web development team gathers as much information as possible about the client's brand, industry, competitors, and target audience to ensure
          that the website meets the client's expectations and aligns with their business objectives. The team also considers the technical requirements such as
          the website's functionality, content management system, and hosting requirements.
        </p>
        <img className="stage__img" src={Stage1} alt="" />
      </div>
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 2
        </button>
        <h3 className="stage__title">Prototyping</h3>
        <p className="stage__p">
          The web development team creates a basic prototype of the website's layout and structure, which outlines the website's overall design, navigation, and
          functionality. The prototype is usually created using wireframes, which are simple visual representations of the website's layout without any design
          elements. The wireframes are reviewed and refined until the client approves them. Once the wireframes are approved, the team moves on to creating a
          high-fidelity mockup of the website's design, which includes all the visual elements, such as colors, typography, images, and graphics. The mockup is
          also reviewed and refined until the client approves it.
        </p>
        <img className="stage__img" src={Stage2} alt="" />
      </div>
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 3
        </button>
        <h3 className="stage__title">Building</h3>
        <p className="stage__p">
          The web development team translates the approved mockup into code using HTML, CSS, and JavaScript. They also add the website's content, such as text,
          images, videos, and other media, using a content management system. The team tests the website's functionality and performance to ensure that it works
          smoothly across different devices, browsers, and platforms. They also optimize the website for search engines, ensuring that it follows best practices
          for on-page optimization and adheres to web standards and accessibility guidelines.
        </p>
        <img className="stage__img" src={Stage3} alt="" />
      </div>
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 4
        </button>
        <h3 className="stage__title">Up and Running</h3>
        <p className="stage__p">
          Following the completion of the final build, the web development team proceeds to set up the website's domain name, hosting, and security protocols.
          They configure the content management system and integrate any necessary third-party tools, such as social media integrations, analytics tools, or
          payment gateways. Once everything is ready, the team uploads the website's files to the web server and tests it again to ensure that it works
          correctly. Finally, the website is launched, and the client is granted access to the content management system to maintain and update the website
          going forward.
        </p>
        <img className="stage__img" src={Stage4} alt="" />
      </div>
    </div>
  );
};

export default Stages;
