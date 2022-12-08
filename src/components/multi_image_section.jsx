import React from "react";
import "../styles/sections.css";
import "../styles/multi_image_section.css"

export default function MultiSection(props) {
  return (
    <div className="multi-section-container" id={props.id}>
      <h1>{props.header}</h1>
      <div className = "reviewer-images">
        <img
          id="image-1"
          className="reviewer-image"
          src={props.image_url1}
          alt="temp"
        />
        <img
        id="image-2"
        className="reviewer-image"
        src={props.image_url2}
        alt="temp" 
        />
        <img
        id="image-2"
        className="reviewer-image"
        src={props.image_url3}
        alt="temp"
        />
      </div>
    </div>
  );
}
