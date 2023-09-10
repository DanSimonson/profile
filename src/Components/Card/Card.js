import "./Card.scss";

export default function SincleCard({ card, handleChoice, flipped }) {
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
