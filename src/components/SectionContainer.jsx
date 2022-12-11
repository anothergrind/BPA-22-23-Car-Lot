import React from "react";
import "../styles/Hero.css";
import "../styles/Sections.css";

// sections jsx without picture
export default function SectionContainer(props) {
  return (
    <div className="section-container" id={props.container_id}>
      <h1 id="purpose-header">Our Purpose</h1>
      <div className="body-section" id={props.body_id}>
        <h2>
          {props.body_text1}
          {props.body_text2}
        </h2>
      </div>
    </div>
  );
}
