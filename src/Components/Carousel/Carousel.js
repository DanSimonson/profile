import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Carousel() {
  let navigate = useNavigate();
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

  const slidesData = [
    {
      id: 1,
      title: "mariposa store",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638171619/mariposa-app/store.jpg",
      link: "https://github.com/DanSimonson/dan_ghie_store",
    },
    {
      id: 2,
      title: "mariposa spa",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638172063/mariposa-app/spa.jpg",
      link: "https://github.com/DanSimonson/spa",
    },
    {
      id: 3,
      title: "Avenger App",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638177525/mariposa-app/marvel.jpg",
      link: "https://github.com/DanSimonson/dossiers",
    },
    {
      id: 4,
      title: "Currency Converter",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/c_scale,h_1280,w_1920/v1669448005/mariposa-app/currencyConverter.jpg",
      link: "https://github.com/DanSimonson/currency_conversion",
    },
    {
      id: 5,
      title: "Shining Nature",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638173583/mariposa-app/nature.jpg",
      link: "https://github.com/DanSimonson/shining",
    },
    {
      id: 6,
      title: "Hangman Game",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638177702/mariposa-app/hangm.jpg",
      link: "https://github.com/DanSimonson/react-hangman",
    },
    {
      id: 7,
      title: "Developer Progress",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1645517366/mariposa-app/chart.jpg",
      link: "https://github.com/DanSimonson/tracker",
    },
    {
      id: 8,
      title: "File-Upload",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1670100114/mariposa-app/fileUpload.jpg",
      link: "https://github.com/DanSimonson/file_upload",
    },
    {
      id: 9,
      title: "Bank Portal",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1671449165/mariposa-app/login.jpg",
      link: "https://github.com/DanSimonson/finance",
    },
  ];

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
    <div className="Carousel">
      <div className="slider-wrapper">
        <Slider {...settings} dots="false">
          {slidesData.map((slide) => (
            <div
              className="slick-slide"
              key={slide.id}
              onClick={() => goToProject(slide.id)}
            >
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={`${slide.url}`} />
              <label className="slick-slide-label">{slide.label}</label>
            </div>
          ))}
        </Slider>
      </div>
      <footer class="display-footer-basic-centered">
        <p class="display-footer-company-motto">
          Contact: dansimonson@mariposaweb.net
        </p>
        {/* <p className="display-footer-links">
          <NavLink to="/blog">My Blog</NavLink>
        </p> */}
        <p class="display-footer-company-name">mariposaweb.net &copy; 2021</p>
      </footer>
    </div>
  );
}

export default Carousel;
