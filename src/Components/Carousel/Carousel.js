import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ projects }) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
  };

  const goToProject = (id) => {
    window.location.assign(`${id}`);
  };

  return (
    <>
      <div className="Carousel">
        <div className="slider-wrapper">
          <Slider {...settings} dots="false">
            {projects.map((slide) => (
              <div
                className="slick-slide"
                key={slide.id}
                onClick={() => goToProject(slide.codeurl)}
              >
                <h2 className="slick-slide-title">{slide.title}</h2>
                <img
                  className="slick-slide-image"
                  alt="slick-slide-img"
                  src={`${slide.picture}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Carousel;
