import "./Card.scss";

export default function SingleCard() {
  const card = "";
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <div className="front">hello Front</div>
        <div className="back" onClick={handleClick}>
          Helo Back
        </div>
      </div>
    </div>
  );
}
