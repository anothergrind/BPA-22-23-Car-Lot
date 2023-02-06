import React from "react";
import "../styles/Sections.css";
import "../styles/CarInfo.css";

// about us page

function Info(props) {
    return ( 
    <div className="info">
        <h1>{props.tag1}: {props.value1}</h1>
        <h1>{props.tag2}: {props.value2}</h1>
    </div>
    )
}

export default function CarInfo(props) {
  return (
    <body style={{backgroundColor: "brown"}}>
        <img className="car-image-slide" src = {props.image_url} />
        <div className="section-container" id="specs-container">
            <div className="extra-images">
                <img className="extra-image" src = {props.extra_images1} />
                <img className="extra-image" src = {props.extra_images2} />
                <img className="extra-image" src = {props.extra_images3} />
                <img className="extra-image" src = {props.extra_images4} />
                <img className="extra-image" src = {props.extra_images5} />
            </div>    
            <div className="info-rows">
                <Info 
                tag1 = "Model"
                value1 = {props.the_value1}
                tag2 = "Make"
                value2 = {props.the_value2}
                />
                <Info 
                tag1 = "Fuel Type"
                value1 = {props.the_value3}
                tag2 = "Cylinder"
                value2 = {props.the_value4}
                />
                <Info 
                tag1 = "Year"
                value1 = {props.the_value5}
                tag2 = "Condition"
                value2 = {props.the_value6}
                />
            </div>
        </div>
    </body>
  );
}
