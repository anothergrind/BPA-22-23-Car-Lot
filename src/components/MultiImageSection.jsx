import React from "react";
import "../styles/Sections.css";
import "../styles/MultiImageSection.css"

export default function MultiSection(props) {
  return (
    <div className="multi-section-container" id={props.id}>
      <h1>{props.header}</h1>
      <div className = "reviewer-images">
        <img
          id="image-1"
          className="reviewer-image"
          src={props.image_url3}
          alt="Black woman and mixed boy looking at the same laptop"
        />
        <img
        id="image-2"
        className="reviewer-image"
        src={props.image_url4}
        alt="A family looking at the same laptop" 
        />
        <img
        id="image-3"
        className="reviewer-image"
        src={props.image_url5}
        alt="Middle aged white lady searching for cars on her laptop"
        />
      </div>
    </div>
  );
}
