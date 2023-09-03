import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
//import useContentful from "../Hooks/useContentful";
//import useContentful from "../Utils/useContentfulAPI";
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
  let [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCarousel();
  }, []);

  const fetchCarousel = async () => {
    let carouselList = [];
    let carouselListTwo = [];
    let carouselData = {};
    const carouselItems = await getCarousel();
    for (let i = 0; i <= carouselItems.items.length - 1; i++) {
      if (carouselItems.items[i].fields.index === 1) {
        carouselList.push(carouselItems.items[i].fields);
      } else if (carouselItems.items[i].fields.index === 2) {
        carouselList.push(carouselItems.items[i].fields);
      }
      showCarousel(carouselList);
    }
    showCarousel(carouselList);
    return carouselListTwo;
  };
  const showCarousel = (carouselData) => {
    if (carouselData.length < 2) {
      console.log("showCarousel carousel: ", carouselData);
    }
  };
}
export default Home;
