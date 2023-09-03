import React from "react";
import Home from "../Views/Home";
import { getUniqueCarousel } from "../Views/Home";
function ShowCarousel() {
  let val = getUniqueCarousel();
  console.log("val: ", val);
  return <div>ShowCarousel: hello world</div>;
}

export default ShowCarousel;
