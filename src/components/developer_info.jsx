import React from "react";
import "../styles/sections.css";
import "../styles/about_us.css";
import Sections from "./sections";


export default function DeveloperInfo(props) {
  return (
    <>
    <div className = "devInfo">
    <h1>The People Behind Wolves Dealership</h1>
    <div className="theBody" id="devBody">
      <div className="devCard">
        <h2>Daniel Mekuria</h2>
        <h3>Primary UI/UX Designer</h3>
      </div>

      <div className="devCard">
        <h2>Adam Taylor</h2>
        <h3>Primary Programmer</h3>
      </div>

      <div className="devCard">
        <h2>Kamsi Ozorji</h2>
        <h3>Primary Researcher</h3>
      </div>
    </div>
  </div>

  <div className="Sections"></div>
  <Sections 
        id = "daniel-blurb"
        header = "Daniel Mekuria - Primary UI/UX Designer"
        image_url = "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png"
        paragraph1 = "Hi my name is Daniel and the rest of this is filler text lol"
        paragraph2 = "can provide you with everything you could wish for. If you need a new or used car, we have all of them at a price you can afford"
        paragraph3 = "We are Chapter 02-1410 from Weiss High School"
        />

    <Sections 
        id = "adam-blurb"
        header = "Adam Taylor - Primary Programmer"
        image_url = "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png"
        paragraph1 = "Hi my name is Adam and the rest of this is filler text lol"
        paragraph2 = "can provide you with everything you could wish for. If you need a new or used car, we have all of them at a price you can afford"
        paragraph3 = "We are Chapter 02-1410 from Weiss High School"
        />

    <Sections 
        id = "Kamsi-blurb"
        header = "Kamsi Ozorji - Primary Researcher"
        image_url = "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/IKk0-ea6c6ac0563e321f006761b13f2caf24.png"
        paragraph1 = "Hi my name is Kamsi and the rest of this is filler text lol"
        paragraph2 = "can provide you with everything you could wish for. If you need a new or used car, we have all of them at a price you can afford"
        paragraph3 = "We are Chapter 02-1410 from Weiss High School"
        />
  </>

  );
}
