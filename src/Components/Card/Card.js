import React, { useState, useEffect } from "react";
import "./Card.scss";
import data from "../../data";

export default function SingleCard() {
  const [card, setCard] = useState(null);
  const [flip, setFlip] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  useEffect(() => {}, []);

  const handleChoice = (flip) => {
    console.log("flip: ", flip);
    // choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    // if (card === choiceOne || card === choiceTwo) {
    //   console.log("choiceOne ==== :", choiceOne);
    //   console.log("choiceTwo ==== :", choiceTwo);
    // }
  };
  const handleClick = () => {
    setFlip(!flip);
    handleChoice(flip);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={flip ? "flip" : ""}>
        <div className="front">
          <h3>Front End developer</h3>
          <p>
            I have many Years of experince using JavaScript, React, Vue and CSS
            to create beautiful websites and UI elements for my clients
          </p>
          <p className="more">Click To See More</p>
        </div>
        <div className="back">
          <h3>Back End Developer</h3>
          <p>
            I am a full-stack developer skilled in the use of Node, MongoDB, and
            Express. I have used my knowledge to help many clients who needed
            help creating and consuming API's
          </p>
          <p className="more">Click To See More</p>
        </div>
      </div>
    </div>
  );
}
