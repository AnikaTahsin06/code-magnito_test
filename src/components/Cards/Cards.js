import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>Helloo!!!!!</h1>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
