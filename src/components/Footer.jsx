
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import wolf from "../pictures/weiss_wolves.png";

// component for footer used in every page on the website
const Footer = () => {
  return (
    <div className="Footer">
      {/* company description section */}
      <div className="footer-container">
        <h1>Wolves Dealership<sup>©</sup></h1>
        <p id="description"> Wolves Dealership is an online car business that provides a convenient and hassle-free way for you to purchase your dream car. We offer a wide selection of quality new and used vehicles from all the major brands. Our dealership aims to provide people with high-quality cars at an affordable price that users agree with.
        </p>
      </div>
      {/* company logo */}
      <img id="footer-wolves-icon" src={wolf} alt="weiss-logo" />
      {/* section for list of links to other site directories */}
      <div className="links">
        <Link className="link" to="/Home">
          Home
        </Link>
        <Link className="link" to="/about_us">
          About
        </Link>
        <Link className="link" to="/inventory">
          Inventory
        </Link>
      </div>
      {/* Going to have all of the Contact info in it, need to add the home and phone icons */}
      {/* Unordered list of contacts users can reach out to */}
      <div className="contacts">
        <h1>Contacts</h1>
        <h4>Phone Number: +1 512 594 1400</h4>
        <h4>Address: 5201 Wolf Pack Dr, Pflugerville, TX, 78660</h4>
      </div>
    </div>
  );
};

export default Footer;
