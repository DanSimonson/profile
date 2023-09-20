import React, { useState, useEffect } from "react";
import Media from "react-media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Components/Navbar/Navbar";
import DisplayGrid from "../Components/DisplayGrid/DisplayGrid";
import DisplayFooter from "../Components/DisplayFooter/DisplayFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "./Home.scss";
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
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const goToRoute = () => {
    navigate("/resume");
  };

  let tempDiv = (
    <div>
      <h1>hello world </h1>
    </div>
  );

  return (
    <>
      <Navbar />
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <>
              <header id="showcase" class="grid">
                <div class="bg-image"></div>
                <div class="content-wrap">
                  <h1>Welcome to Mariposaweb</h1>
                  <p>
                    A full service Developer focused on providing beautiful User
                    Interfaces and optimized, stable API Creation and
                    Consumption.
                  </p>
                </div>
              </header>

              <main id="main">
                <section id="section-a" class="grid">
                  <div class="content-wrap">
                    <h2 class="content-title">Web & Application Development</h2>
                    <div class="content-text">
                      <p>
                        I have spent several years boosting traffic, add
                        immersive content, increase engagement with beautiful
                        User Interfaces and optimized, stable API creation and
                        consumption.
                      </p>
                    </div>
                  </div>
                </section>
                <section id="section-b" class="grid">
                  <ul>
                    <li>
                      <div class="card">
                        <img
                          src="https://static.pexels.com/photos/574077/pexels-photo-574077.jpeg"
                          alt=""
                        />
                        <div class="card-content">
                          <h3 class="card-title">Front-End Development</h3>
                          <p>
                            I enjoy crafting polished user interactions that
                            surprise and delight users using primarly JavaScript
                            framework React but I also have experienc with Vue
                            and Angular.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="card">
                        <img
                          src="https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg"
                          alt=""
                        />
                        <div class="card-content">
                          <h3 class="card-title">Back-End Developer</h3>
                          <p>
                            I focus on optimized, stable API creation and
                            consumption with Node, MongoDB, Mongoose, MySql, and
                            headless cms's. I have provided a number of
                            successful solutions.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="card">
                        <img
                          src="https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg"
                          alt=""
                        />
                        <div class="card-content">
                          <h3 class="card-title">Software Engineer</h3>
                          <p>
                            I have worked at all stages of the system
                            development life cycle. From designing to coding to
                            testing. I can provide full-spectrum knowledge when
                            producing web applications.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
                <section id="section-c" class="grid">
                  <div class="content-wrap">
                    <h2 class="content-title">
                      We handle all of your digital tech marketing needs
                    </h2>
                    <p>
                      I spent years increasing user engagement with immersive
                      content.
                    </p>
                  </div>
                </section>
              </main>
            </>
          ) : (
            <>
              <div id="parent">
                <div className="name">
                  <h1 className="flip">mariposaweb.net</h1>
                </div>
                <div id="header" className="iconSize">
                  <a href="https://github.com/DanSimonson/" target="blank">
                    <div className="boxes bounceMeOne">
                      <FontAwesomeIcon
                        className="stayWhite"
                        icon={faGithub}
                      ></FontAwesomeIcon>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dansimonsonmariposaweb/"
                    target="blank"
                  >
                    <div className="boxes bounceMeTwo">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="stayWhite"
                      ></FontAwesomeIcon>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/mariposaweb.net/"
                    target="blank"
                  >
                    <div className="boxes bounceMeThree">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="stayWhite"
                      ></FontAwesomeIcon>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/simonsondan?lang=en"
                    target="blank"
                  >
                    <div className="boxes bounceMeFour">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="stayWhite"
                      ></FontAwesomeIcon>
                    </div>
                  </a>
                </div>
                <div className="helloSection">
                  <div id="left">
                    <p>Hi. I’m Dan Simonson, nice to meet you.</p>
                    <p>Please take a look around!</p>
                  </div>
                  <div id="right">
                    <p>
                      I am passionate about building excellent software that
                      improves the lives of those around me. I specialize in
                      creating software for clients ranging from individuals and
                      small-businesses all the way to large enterprise
                      corporations at mariposaweb.net
                    </p>
                  </div>
                </div>
                <div className="filler" onClick={goToRoute}>
                  See Resume<span className="fillerSpan">@mariposaweb.net</span>
                </div>
              </div>
              <div className="wrapper">
                <div className="transition">Some Stuff About Me</div>
                <div className="about">
                  <p align="center" data-aos="slide-right">
                    About Dan Simonson
                  </p>
                  <p align="center" data-aos="slide-left">
                    How does he know this stuff
                  </p>
                </div>
                <div className="container">
                  <div className="grid-item a" data-aos="zoom-in-up">
                    <span className="spanClass">
                      <FontAwesomeIcon
                        style={{ color: "green" }}
                        icon={faGraduationCap}
                      >
                        Education
                      </FontAwesomeIcon>
                      &nbsp; Education
                    </span>
                    <p className="pClass">
                      I have an Associates in Programming and a Bachelor of
                      Science in Computer Science (cum laude/3.65 GPA) as well
                      as well as several Free Code Camp and HackerRank
                      Certificates
                    </p>
                  </div>
                  <div className="grid-item b" data-aos="zoom-in-up">
                    <span className="spanClass">
                      <FontAwesomeIcon
                        style={{ color: "blue" }}
                        icon={faBriefcase}
                      ></FontAwesomeIcon>
                      &nbsp; Skills
                    </span>
                    <p className="pClass">
                      I enjoy bringing ideas to life in the browser. I am a full
                      stack developer who is well versed in JavaScript, React,
                      Node, CSS3 and their accompanying ecosystems.
                    </p>
                  </div>

                  <div className="grid-item c" data-aos="zoom-in-up">
                    <span className="spanClass">
                      <FontAwesomeIcon
                        style={{ color: "red" }}
                        icon={faHeart}
                      ></FontAwesomeIcon>
                      &nbsp; Passion
                    </span>
                    <p className="pClass">
                      Over the last several years I have invested thousands of
                      hours honing my craft. I am perpetually working on
                      improving my chops one problem at a time.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    height: "30rem",
                    width: "100vw",
                    backgroundColor: "whitesmoke",
                  }}
                ></div>
                <DisplayGrid />
              </div>
            </>
          )
        }
      </Media>
      <DisplayFooter />
    </>
  );
}
export default Home;
