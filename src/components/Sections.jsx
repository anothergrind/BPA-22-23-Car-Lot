import React from "react";
import "../styles/Sections.css";

//section with title, picture, paragraph
export default function Sections(props) {
  return (
    <>
      <div className="section-container" id={props.id}>
        < h1 id={props.header_id} className="theHeader">{props.the_header}</h1>
        <div id={props.body_id}className="theBody">
          <img
            className="image"
            src= {props.image_url}
            id = {props.image_id}
            temp="Red Jeep on the top of a hill"
          />
          <p id={props.para_id}>
            {props.paragraph1}
            {props.paragraph2}
            {props.paragraph3}
            <br />
            <br />
            {props.paragraph4}
            <br />
            {props.paragraph5}
            <br />
            <br />
            {props.paragraph6}
            <br />
            <br />
            {props.paragraph7}
          </p>
        </div>
      </div>
    </>
  );
}
