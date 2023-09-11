import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.scss";
import data from "../../data";

export default function SingleCard() {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    console.log("clicking");
    setFlip(!flip);
  };

  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection="vertical"
      flipSpeedBackToFront="2"
      flipSpeedFrontToBack="2"
    >
      <div className="card__body">
        <h3>Front End developer</h3>
        <p>
          I have many Years of experince using JavaScript, React, Vue and CSS to
          create beautiful websites and UI elements for my clients
        </p>
        <p className="more" onClick={handleClick}>
          Click To See More
        </p>
      </div>
      <div className="card__body">
        <h3>Back End Developer</h3>
        <p>
          I am a full-stack developer skilled in the use of Node, MongoDB, and
          Express. I have used my knowledge to help many clients who needed help
          creating and consuming API's
        </p>
        <p className="more" onClick={handleClick}>
          Click To See More
        </p>
      </div>
    </ReactCardFlip>
  );
}
