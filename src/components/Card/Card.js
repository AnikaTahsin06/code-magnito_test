import React from "react";
import "./Card.css";

const Card = ({ img, name, title, description }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="I am Pinki" />
      </div>
      <div className="card-body text-position">
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
