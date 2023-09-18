import React from "react";
import "./DisplayFooter.scss";
import { NavLink } from "react-router-dom";

const DisplayFooter = () => {
  let linkBlog = "heuristic-neumann-ad864a.netlify.app";
  return (
    <>
      <footer className="display-footer-basic-centered">
        <p className="display-footer-company-motto">
          Contact: dansimonson@mariposaweb.net
        </p>
        <p className="display-footer-links">
          <a href="https://blog.mariposaweb.net" target="_blank">
            My Blog
          </a>
        </p>
        <p className="display-footer-company-name">
          mariposaweb.net &copy; 2021
        </p>
      </footer>
    </>
  );
};

export default DisplayFooter;
