import React from "react";
import "./styles.css";
import carHero from "./pictures/carHero.png";
import Hero from "./components/Hero.jsx";
import "./styles/Sections.css";
import Sections from "./components/Sections.jsx";
import MultiSection from "./components/MultiImageSection.jsx";
import SearchSection from "./components/SearchSection.jsx";

// default website page
export default function Home() {
  window.scrollTo(0, 0)
  return (
    <>
      <div className="App">
        <Hero
          text="Cars that fit your plan"
          backgroundImage="https://www.supercars.net/blog/wp-content/uploads/2020/11/2017-Mercedes-Benz-SL63-AMG-003-2000-scaled.jpg"
        />
        <Sections
          id="dealership-description"
          the_header="About this dealership"
          image_url="https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600"
          para_id = "para"
          paragraph1="Wolves Dealership is an online car business that provides a convenient and hassle-free way for you to purchase your dream car. We offer a wide selection of quality new and used vehicles from all the major brands. Our dealership aims to provide people with high-quality cars at an affordable price that users agree with."
        />
        <SearchSection/>
      </div>
    </>
  );
}
