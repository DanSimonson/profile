import React from "react";
import "./DisplayGrid.scss";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function DisplayGrid({ cards, projects }) {
  return (
    <React.Fragment>
      <div className="bodyWrap">
        <div className="spacerDiv"></div>
        <div className="accomplishments">
          <p className="separater"></p>
          <h1>Contracting </h1>
          <h1> Accomplishments</h1>
          <p className="paragraph">
            Focusing on web and application development, I have leveraged my
            years of experience to help my clients achieve their goals.
          </p>
        </div>

        <Card />

        <div className="display-container">
          {cards.map((card, index) => (
            <motion.div
              whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              key={index}
              className="display-card animateCard"
            >
              <div className="display-content">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </motion.div>
          ))}
          )
        </div>
        <div className="transitionToCarousel">Some Personal Projects</div>
        <div className="carouselSection">
          <div className="background-animation-container">
            <Carousel projects={projects} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DisplayGrid;
