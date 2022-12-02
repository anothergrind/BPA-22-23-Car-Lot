import React from "react";
import AboutUs from "../components/about_us.jsx";
import "../styles/about_us.css";

// about us page
export default function about_us() {
  return (
    <>
      <div className="about">
        <AboutUs
          text="We want to see 
          the world soar"
          imageDetails='{{backgroundImage:"}}'
        />
      </div>
    </>
  );
}
