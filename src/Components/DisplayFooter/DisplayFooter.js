import React, { Component } from "react";
import "./DisplayFooter.scss";
//import "./Footer.scss";
import { NavLink } from "react-router-dom";

export class DisplayFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="display-footer-basic-centered">
        <p className="display-footer-company-motto">
          Contact: dansimonson@mariposaweb.net
        </p>
        <p className="display-footer-company-name">
          mariposaweb.net &copy; 2021
        </p>
      </footer>
    );
  }
}
export default DisplayFooter;
