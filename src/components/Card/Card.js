import React from "react";
import "./Card.css";
import pinki from "../../images/pinki.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={pinki} alt="I am Pinki" />
      </div>
      <div className="card-body">
        <h2>Miss Pinki</h2>
        <h3>Web Developer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          pariatur, mollitia nesciunt tenetur nam tempore porro in id
          voluptatibus repelle
        </p>
      </div>
    </div>
  );
};

export default Card;
