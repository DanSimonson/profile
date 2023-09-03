import React from "react";

function ShowCarousel({ carouselList }) {
  return (
    <div>
      {carouselList.map((item, index) => (
        <div key={item.index}>{item.name}</div>
      ))}
    </div>
  );
}

export default ShowCarousel;
