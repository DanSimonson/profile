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
    switch (id) {
      case 1:
        window.location.assign("https://github.com/DanSimonson/dan_ghie_store");
        break;
      case 2:
        window.location.assign("https://github.com/DanSimonson/spa");
        break;
      case 3:
        window.location.assign("https://tender-shockley-0f4de4.netlify.com/");
        break;
      case 4:
        window.location.assign(
          "https://github.com/DanSimonson/currency_conversion"
        );
        break;
      case 5:
        window.location.assign("https://brave-mccarthy-f6fbb2.netlify.app/");
        break;
      case 6:
        window.location.assign("https://github.com/DanSimonson/react-hangman");
        break;
      case 7:
        window.location.assign("https://github.com/DanSimonson/tracker");
        break;
      case 8:
        window.location.assign("https://github.com/DanSimonson/file_upload");
        break;
      case 9:
        window.location.assign("https://github.com/DanSimonson/finance");
        break;
      default:
      // code block
    }
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
                onClick={() => goToProject(slide.id)}
              >
                <h2 className="slick-slide-title">{slide.title}</h2>
                <img
                  className="slick-slide-image"
                  alt="slick-slide-img"
                  src={`${slide.picture}`}
                />
                {/* <label className="slick-slide-label">{slide.label}</label> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Carousel;
