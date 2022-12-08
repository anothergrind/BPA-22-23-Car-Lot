import React from "react";
import Sections from "../components/sections.jsx";
import SectionContainer from "./section-container.jsx";
import "../styles/sections.css";
import "../styles/car_info.css";

// about us page

export default function CarInfo() {

    function Info(props) {
        return ( 
        <div className="info">
            <h1>{props.tag1}</h1>
            <h1>{props.tag2}</h1>
        </div>
        )
    }


  return (
    <body style={{backgroundColor: "brown"}}>
        < img className="car-image-slide" src = "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png" />
        <div className="section-container" id="specs-container">
            <div className="extra-images">
                <img className="extra-image" src= "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png" />
                <img className="extra-image" src= "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png" />
                <img className="extra-image" src= "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png" />
                <img className="extra-image" src= "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png" />
                <img className="extra-image" src= "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png" />
            </div>    
            <div className="info-rows">
                <Info 
                tag1 = "Model: temp"
                tag2 = "Make: temp"
                />
                <Info 
                tag1 = "Fuel Type: temp"
                tag2 = "Cylinder: temp"
                />
                <Info 
                tag1 = "Year: 2020"
                tag2 = "Condition: temp"
                />
            </div>
        </div>
    </body>
  );
}
