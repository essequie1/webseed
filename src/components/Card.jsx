import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h3 className="card__title">{props.title}</h3>
      {props.svg}
      <p className="card__p">{props.p}</p>
    </div>
  );
};

export default Card;
