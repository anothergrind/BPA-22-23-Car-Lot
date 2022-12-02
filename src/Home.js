import React from "react";
import "./styles.css";
import carHero from "./pictures/carHero.png";
import Hero from "./components/hero.jsx";
import SectionOne from "./components/section_one.jsx";
import SectionTwo from "./components/section_two.jsx";

// default website page
export default function Home() {
  return (
    <>
      <div className="App">
        <Hero
          text="Cars that fit your plan"
          imageDetails='{{backgroundImage: "}}'
        />
        <SectionOne />
        <SectionTwo />
      </div>
    </>
  );
}
