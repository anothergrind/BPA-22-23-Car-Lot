import React from "react";
import aHero from "./pictures/about_us_hero.png";

export default function about_us_hero() {
  return (
    <>
      <div className="aHero">
        {/*Hero*/}
        <img id="aHero" src={aHero} alt="Grown adult man smiling back at you" />
        <h1 className="overlay-text">
          We want to see <br />
          the world soar
        </h1>
      </div>
    </>
  );
}
