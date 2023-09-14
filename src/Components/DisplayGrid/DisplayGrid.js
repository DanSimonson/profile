import React from "react";
import "./DisplayGrid.scss";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data";

function DisplayGrid() {
  let tempArray = data.cards;

  return (
    <React.Fragment>
      <div className="bodyWrap">
        <div className="heroImage">
          <div className="bg-image"></div>
        </div>
        <div className="accomplishments">
          <h1>Contracting </h1>
          <h1> Accomplishments</h1>
          <p className="paragraph">
            Focusing on web and application development, I have leveraged my
            years of experience to help my clients achieve their goals.
          </p>
        </div>
        <div
          style={{
            //border: "5px solid red",
            width: "100%",
            height: "100%",
            //visibility: "hidden",
          }}
        >
          <Card />
        </div>

        <div className="display-container">
          {tempArray.map((card, index) => (
            <div key={index} className="display-card animateCard">
              <div className="display-content">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
          )
        </div>
        <div className="carouselSection">
          <div className="background-animation-container">
            <div className="transitionToCarousel">Some Personal Projects</div>
            <Carousel carousel={data.projects} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DisplayGrid;
