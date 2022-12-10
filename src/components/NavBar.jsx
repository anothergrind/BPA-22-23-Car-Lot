import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import wolf from "../pictures/weiss_wolves.png";

// component for navbar used on every page
const Navbar = () => {
  return (
    <div className="Nav">
      <img id="wolves-icon-nav" src={wolf} alt="weiss" />
      <h1 id="site-name">
        Wolves Dealership<sup>©</sup>
      </h1>
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/about_us">
        About
      </Link>
      <Link className="link" to="/explore">
        Explore
      </Link>
      {/* <Link className="link" to="/search">
        Search
      </Link> */}
    </div>
  );
};

export default Navbar;
