import React from "react";
import Card from "../Card/Card";
import mew1 from "../../images/1.jpg";
import mew2 from "../../images/2.jpg";
import mew3 from "../../images/3.jpg";
import mew4 from "../../images/4.jpg";
import mew5 from "../../images/5.jpg";
import mew6 from "../../images/6.jpg";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container">
      <div className="heading text-position">
        <h1>Let's introduce with our cat programmers!</h1>
      </div>
      <div className="cards">
        <Card
          img={mew1}
          name="Tom Figaro"
          title="Front-end Engineer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          pariatur, mollitia nesciunt tenetur nam tempore porro in id
          voluptatibus repelle"
        />
        <Card
          img={mew2}
          name="Bella Camellia"
          title="Web Designer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          pariatur, mollitia nesciunt tenetur nam tempore porro in id
          voluptatibus repelle"
        />
        <Card
          img={mew3}
          name="Crookshanks"
          title="AI Engineer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          pariatur, mollitia nesciunt tenetur nam tempore porro in id
          voluptatibus repelle"
        />
        <Card
          img={mew4}
          name="Pinky Rose"
          title="Web Developer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          pariatur, mollitia nesciunt tenetur nam tempore porro in id
          voluptatibus repelle"
        />
        <Card
          img={mew5}
          name="Garfiels"
          title="Software Engineer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          pariatur, mollitia nesciunt tenetur nam tempore porro in id
          voluptatibus repelle"
        />
        <Card
          img={mew6}
          name="Lucy Lily"
          title="React Engineer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          pariatur, mollitia nesciunt tenetur nam tempore porro in id
          voluptatibus repelle"
        />
      </div>
      <div className="text-position">
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className="text-position">
          @ Copyright 2022. All Right Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Cards;
