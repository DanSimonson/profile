import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowCarousel from "../Components/ShowCarousel";
import "animate.css";
import "./Home.css";
import {
  faGraduationCap,
  faBriefcase,
  faHeart,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useContentfulAPI from "../Utils/useContentfulAPI";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
`;

const X = <FontAwesomeIcon icon={faTwitter} />;

function Home() {
  const { getCarousel } = useContentfulAPI();
  let [carousel, setCarousel] = useState([]);

  useEffect(() => {
    fetchCarousel();
  }, []);

  const fetchCarousel = async () => {
    let carouselList = [];
    const carouselItems = await getCarousel();

    for (let i = 0; i <= carouselItems.items.length - 1; i++) {
      if (carouselItems.items[i].fields.index === 1) {
        if (carouselList.length < carouselItems.items.length) {
          carouselList.push(carouselItems.items[i].fields);
        }
      } else if (carouselItems.items[i].fields.index === 2) {
        if (carouselList.length < carouselItems.items.length) {
          carouselList.push(carouselItems.items[i].fields);
        }
      }
      getUniqueCarousel(carouselList, carouselItems.items.length);
    }
  };

  const getUniqueCarousel = (carouselData, length) => {
    if (carouselData.length < length) {
      setCarousel(carouselData);
      return carouselData;
    }
  };

  return (
    <div>
      <ShowCarousel carouselList={carousel} />
    </div>
  );
}
export default Home;
