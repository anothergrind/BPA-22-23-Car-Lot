import React from "react";
import "/src/styles/hero.css";

// component for hero section used in the home page
export default function Hero(props) {
  return (
    <div className="hero">
      <h1 className="overlay-text">{props.text}</h1>
    </div>
  );
}
