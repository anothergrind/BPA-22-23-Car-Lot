import React from "react";
import "../styles/Sections.css";

//section with title, picture, paragraph
export default function Sections(props) {
  return (
    <>
      <div className="section-container" id={props.id}>
        <h1 id="header">{props.header}</h1>
        <div className="theBody">
          <img
            className="image"
            src= {props.image_url}
          />
          <p id="para">
            {props.paragraph1}
            {props.paragraph2}
            {props.paragraph3}
            <br />
            <br />
            {props.paragraph4}
            <br />
            {props.paragraph5}
          </p>
        </div>
      </div>
    </>
  );
}
