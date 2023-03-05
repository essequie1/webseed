import React from "react";
import Stage1 from "../assets/svg/Stage1.svg";
import flap from "../assets/svg/flap.svg";

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
        elm.style.transform = "translateX(-90vw)";
      }, 100 * i);
    });

    nSiblings.reverse();
    nSiblings.map((elm, i) => {
      setTimeout(() => {
        elm.removeAttribute("style");
      }, 100 * i);
    });
  };

  return (
    <div className="stages">
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 1
        </button>
        <h3 className="stage__title">STAGE 1</h3>
        <p className="stage__p">
          Whether it is to have more sales, to grow a community, or to make your services known, we must determine specifically what is the main objective to
          achieve, so we can determine each of the steps to follow, the way of doing things, the technologies to use and the methodologies to employ. At this
          stage we can also determine the estimated time of work and an initial budget to start working.
        </p>
        <img className="stage__img" src={Stage1} alt="" />
      </div>
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 2
        </button>
        <h3 className="stage__title">STAGE 2</h3>
        <p className="stage__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin nibh eget nisl eleifend, nec vehicula felis sagittis. Pellentesque eleifend
          elit at nunc pretium ornare. Integer congue fermentum felis ornare luctus. In luctus cursus diam quis cursus. Quisque fringilla vehicula lacus, a
          dapibus magna blandit faucibus. Cras gravida augue fermentum massa rutrum, non lacinia massa dignissim. Phasellus lobortis varius elit, in lacinia
          justo iaculis nec.
        </p>
        <img className="stage__img" src={Stage1} alt="" />
      </div>
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 3
        </button>
        <h3 className="stage__title">STAGE 3</h3>
        <p className="stage__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin nibh eget nisl eleifend, nec vehicula felis sagittis. Pellentesque eleifend
          elit at nunc pretium ornare. Integer congue fermentum felis ornare luctus. In luctus cursus diam quis cursus. Quisque fringilla vehicula lacus, a
          dapibus magna blandit faucibus. Cras gravida augue fermentum massa rutrum, non lacinia massa dignissim. Phasellus lobortis varius elit, in lacinia
          justo iaculis nec.
        </p>
        <img className="stage__img" src={Stage1} alt="" />
      </div>
      <div className="stage">
        <input id="S1" className="flap" type="image" src={flap} value="STAGE" alt="STAGE 1" onClick={e => stageSelector(e)} />
        <button onClick={e => stageSelector(e)} className="flap__title">
          STAGE 4
        </button>
        <h3 className="stage__title">STAGE 4</h3>
        <p className="stage__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin nibh eget nisl eleifend, nec vehicula felis sagittis. Pellentesque eleifend
          elit at nunc pretium ornare. Integer congue fermentum felis ornare luctus. In luctus cursus diam quis cursus. Quisque fringilla vehicula lacus, a
          dapibus magna blandit faucibus. Cras gravida augue fermentum massa rutrum, non lacinia massa dignissim. Phasellus lobortis varius elit, in lacinia
          justo iaculis nec.
        </p>
        <img className="stage__img" src={Stage1} alt="" />
      </div>
    </div>
  );
};

export default Stages;
