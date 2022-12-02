import React from "react";
import "/src/styles/sections.css";

export default function SectionOne() {
  return (
    <>
      <div className="container" id="section_one">
        <h1 id="header">
          Description about Wolves <br />
          Dealership
        </h1>
        <div className="theBody">
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiPhZnIOCpFl0oSWXANSZw38xanUiqkfwKQ&usqp=CAU"
            alt="temp"
          />
          <p id="para">
            The average price for a car in the USA is currently over $50,000.
            Our dealership aims to provide people with high-quality cars at an
            affordable price that users agree with.
          </p>
        </div>
      </div>
    </>
  );
}
