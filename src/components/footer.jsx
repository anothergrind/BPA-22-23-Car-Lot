import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import wolf from "../pictures/weiss_wolves.png";

// component for footer used in every page on the website
const Footer = () => {
  return (
    <div className="Footer">
      {/* company description section */}
      <div className="footer-container">
        <h1>Wolves Dealership<sup>©</sup></h1>
        <p id="description"> 'Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.'</p>
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
        <Link className="link" to="/explore">
          Explore
        </Link>
        <Link className="link" to="/search">
          Search
        </Link>
      </div>
      {/* Going to have all of the Contact info in it, need to add the home and phone icons */}
      {/* Unordered list of contacts users can reach out to */}
      <div className="contacts">
        <h1>Contacts</h1>
        <h4>    : Phone Number +1 512 594 1400</h4>
        <h4>    : 5201 Wolf Pack Dr, Pflugerville, TX, 78660</h4>
      </div>
    </div>
  );
};

export default Footer;
