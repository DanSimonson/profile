import React, { useEffect, useState } from "react";
import "./DisplayGrid.scss";
import Carousel from "../Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { listCards } from "../../Actions/CardActions";
import { useSelector, useDispatch } from "react-redux";
import useContentfulAPI from "../../Utils/useContentfulAPI";
import SyncLoader from "react-spinners/SyncLoader";
import data from "../../data";

function DisplayGrid() {
  const { getCarousel } = useContentfulAPI();
  let [carousel, setCarousel] = useState([]);
  let cardArray = [];
  //console.log("data.projects: ", data.projects);
  //let tempItem = data.projects.splice(3, 4);
  let tempArray = data.cards.filter((card) => card.title !== "Next Egg");
  console.log("tempArray: ", tempArray);
  //cardArray = [...tempArray, ...tempItem];
  //console.log("cardArray: ", cardArray);
  //console.log("tempItem: ", tempItem);
  //console.log("data.projects: ", data.projects);
  //console.log("data.cards: ", data.cards);
  //const cardStuff = useSelector((state) => state.cardPosts);
  //console.log("cardStuff: ", cardStuff);
  //let dispatch = useDispatch();
  //const cardStuff = useSelector((state) => state.cardPosts);
  //let cardArray = [];
  //console.log("cardStuff: ", cardStuff);
  //if (cardStuff.loading === false) {
  //   let tempItem = cardStuff.listCards.slice(3, 4);
  //   let tempArray = cardStuff.listCards.filter(
  //     (card) => card.title !== "Next Egg"
  //   );
  //   cardArray = [...tempArray, ...tempItem];
  //}

  // useEffect(() => {
  //   const cardElement = document.querySelector(".card__inner");
  //   const toggleButton = document.getElementsByClassName(
  //     "displaygrid_toggle_button"
  //   )[0];
  //   const navbarLinks = document.getElementsByClassName(
  //     "displaygrid_navbar_links"
  //   )[0];
  //   cardElement.addEventListener("click", function (e) {
  //     cardElement.classList.toggle("is-flipped");
  //   });
  //   //fetchCarousel();
  // }, []);

  const fetchCarousel = async () => {
    let carouselList = [];
    const carouselItems = await getCarousel();
    console.log("carouselItems.items: ", carouselItems.items);
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

  // useEffect(() => {
  //   dispatch(listCards());
  // }, [dispatch]);
  return (
    <React.Fragment>
      <div className="bodyWrap">
        <div className="heroImage">
          <div className="bg-image"></div>
        </div>
        {/* <nav className="displaygrid_navbar">
          <div className="displaygrid_brand_title">MARIPOSAWEB</div>
          <a href="#" className="displaygrid_toggle_button">
            <span className="displaygrid_bar"></span>
            <span className="displaygrid_bar"></span>git
            <span className="displaygrid_bar"></span>
          </a>
          <div className="displaygrid_navbar_links">
            <ul>
              {/*<li><a href='#'>Home</a></li>*/}
        {/* <NavLink
                to="/"
                className="displaygrid_navlink"
                activeClassName="displaygrid_navlink_active"
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className="displaygrid_navlink"
                activeClassName="displaygrid_navlink_active"
              >
                Blog
              </NavLink> */}
        {/*<li><a href='#'>Blog</a></li>*/}
        {/* </ul>
          </div> */}
        {/* </nav>  */}
        <div className="accomplishments">
          <h1>Contracting </h1>
          <h1> Accomplishments</h1>
          <p className="paragraph">
            Focusing on web and application development, I have leveraged my
            years of experience to help my clients achieve their goals.
          </p>
        </div>
        <div className="card_outer">
          <div className="card__inner">
            <div className="card__face card__face--front">
              <div className="card__content">
                <div className="card__body">
                  <h3>Front End developer</h3>
                  <p>
                    I have many Years of experince using JavaScript, React, Vue
                    and CSS to create beautiful websites and UI elements for my
                    clients
                  </p>
                  <p className="more">Click To See More</p>
                </div>
              </div>
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className="card__body">
                  <h3>Back End Developer</h3>
                  <p>
                    I am a full-stack developer skilled in the use of Node,
                    MongoDB, and Express. I have used my knowledge to help many
                    clients who needed help creating and consuming API's
                  </p>
                  <p className="more">Click To See More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="display-container">
          {tempArray.map((card, index) => (
            <div key={card.id} className="display-card animateCard">
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

/**
 * {cardStuff.loading ? (
            <>
              <SyncLoader loading color="orange" />
              <h1 style={{ color: "orange" }}>loading...</h1>
            </>
          ) : cardStuff.error ? (
            <div className="gridloading">
              <SyncLoader loading color="orange" />
              {cardStuff.error}
            </div>
          )
 */
