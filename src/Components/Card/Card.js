import "./Card.scss";

export default function SingleCard() {
  let flipped = false;
  const card = "";
  const handleChoice = (card) => {};
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <div className="front">
          <h3>Front End developer</h3>
          <p>
            I have many Years of experince using JavaScript, React, Vue and CSS
            to create beautiful websites and UI elements for my clients
          </p>
          <p className="more">Click To See More</p>
        </div>
        <div className="back" onClick={handleClick}>
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
