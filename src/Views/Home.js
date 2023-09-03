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
    let carouselData = [];
    const carouselItems = await getCarousel();
    for (let i = 0; i <= carouselItems.items.length - 1; i++) {
      // if (carouselItems.items[i].fields.index === 1) {
      //   carouselList.push(carouselItems.items[i].fields);
      // } else if (carouselItems.items[i].fields.index === 2) {
      //   //carouselList.push(carouselItems.items[i].fields);
      //   //carouselListTwo.push(carouselItems.items[i].fields);
      //   console.log(carouselList);
      //   let carouselArr = carouselList.map((arr) => {
      //     return { ...arr };
      //   });
      //   console.log("carouselArr: ", carouselArr);
      //   //let array2 = array.map(a => {return {...a}})
      //   //let nwArray = carouselItems.items[i].fields.pop();
      //   //console.log("nwArray: ", nwArray);
      // }
      //const avatar = item.fields.avatar.fields;
      if (typeof carouselItems.items[i].fields.index === "number") {
        let tempVal = carouselItems.items[i].fields;
        setCarousel((carousel) => [...carousel, tempVal]);

        //console.log("tempVal: ", tempVal);
        //let newArr = [];
        //newArr.push(tempVal);
        //setTheArray(oldArray => [...oldArray, newElement]);
        //carouselItems.items[i].fields);
        //console.log(typeof carouselItems.items[i].fields.index);
        //carouselList.push(carouselItems.items[i].fields);
        //if (typeof carouselItems.items[i].fields!== 'undefined') {
        // if (
        //   carouselList.items[i].fields.index !==
        //   carouselList.items[i].fields.index - 1
        // )
        //carouselList.push(carouselItems.items[i].fields);
        //}
        //console.log(typeof carouselItems.items[i].fields.index);
      }
      showCarousel();
      //   if (typeof maybeObject != "undefined") {
      //     alert("GOT THERE");
      //  }
    }
    //   var newArray = new Array (
    //     dataArray1.values(),
    //     dataArray2.values(),
    //     // ... where values() (or something equivalent) would push the individual values into the array, rather than the array itself
    //  );
    //put object --- into an array
    //let temp = []
    //let nwTemp = temp.push()
    //let nwTemp =
    //let items = new Array(carouselList, carouselListTwo);
    //let result = newArray(items, [])
    //console.log("items: ", items);
    //console.log("carousel: ", carousel);
    showCarousel();
    return carouselListTwo;
  };
  const showCarousel = () => {
    console.log("showCarousel carousel: ", carousel);
  };
}
export default Home;
