import React from "react";
import "./DisplayFooter.scss";
import { NavLink } from "react-router-dom";

const DisplayFooter = () => {
  return (
    <footer className="display-footer-basic-centered">
      <p className="display-footer-company-motto">
        Contact: dansimonson@mariposaweb.net
      </p>
      <p className="display-footer-links">
        <NavLink to="">My Blog</NavLink>
      </p>
      <p className="display-footer-company-name">mariposaweb.net &copy; 2021</p>
    </footer>
  );
};

export default DisplayFooter;
