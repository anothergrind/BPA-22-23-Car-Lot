import React from "react";
import Hero from "../components/Hero.jsx";
import Sections from "../components/Sections.jsx";
import DeveloperInfo from "../components/DeveloperInfo.jsx";
import SectionContainer from "../components/SectionContainer.jsx";
import "../styles/Sections.css";
import "../styles/AboutUs.css";
// about us page

export default function about_us() {
  window.scrollTo(0, 0)
  return (
    <>
      <div className="about">
        <Hero
        text="We want to see the world soar"
        textId="about-hero-overlay-text"
        backgroundImage = "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/lV8i-about_us_hero.png"
        />

        <SectionContainer 
        container_id = "our-purpose"
        body_id = "purpose-body"
        body_text1 = "It doesn't take a lot to make us look like the leader in the industry when it comes to car results. " 
        body_text2 = "That's why we're always coming up with new ways to get people excited about our products."
        />

        <Sections 
        id = "about-wolves"
        the_header = "All About the Wolves"
        image_url = "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png"
        para_id = "para"
        paragraph1 = "At the wolves dealership, we are thrilled to offer a unique shopping experience as the world's first exclusive wolf-themed dealership The only one that understands your needs and desires and "
        paragraph2 = "can provide you with everything you could wish for. If you need a new or used car, we have all of them at a price you can afford."

        paragraph4 = "We are Chapter 02-1410 from Weiss High School"
        paragraph5 = "Address: 5201 Wolf Drive Dr, Pflugerville, TX, 78660"
        />

        <DeveloperInfo />
      </div>
    </>
  );
}
