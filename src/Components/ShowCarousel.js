import React from "react";
import Home from "../Views/Home";

function ShowCarousel() {
  let val = Home.ShowCarousel();
  console.log("val: ", val);
  return <div>ShowCarousel: hello world</div>;
}

export default ShowCarousel;
