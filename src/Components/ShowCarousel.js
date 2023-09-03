import React from "react";
import Home from "../Views/Home";

function ShowCarousel() {
  let val = Home.getUniqueCarousel();
  console.log("val: ", val);
  return <div>ShowCarousel: {val}</div>;
}

export default ShowCarousel;
