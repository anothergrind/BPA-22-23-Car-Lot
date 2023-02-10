import React from "react";
import "/src/styles/Hero.css";

// Component rendered for about us page
export default function AboutUs() {
  return (
    <div>
      <div className="apurpose">
        {/*Purpose*/}
        <h1 className="abody">Our Purpose</h1>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
        </text>
      </div>

      <div>
        {/*About the dealership*/}
        <h1 className="abody">All About the Wolves</h1>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
        </text>
      </div>

      <div className="adeveloper">
        {/*The developers + roles + slideshow*/}
        <h2>The People Behind the Wolves Dealership</h2>

        <h4> Daniel Mekuria </h4>
        <h6> Primary UI/UX Designer </h6>
        <text>
          {/*Straight out of last year */}
          {/* Please Update */}
          {/* Probably going to use the design from last year*/}
          Hey! My name is Daniel Mekuria and I am a fourth-year member of 
          BPA and this year's President at Weiss High School. I am a senior in the Health
          Science Pathway and an officer in HOSA, as well as the secretary in My Brother's
          Keeper. I volunteer as the Service Coordinator at Austin Ethiopian Orthodox Tewahedo 
          Youth and a deacon at my church, St. Raguel Church. I love making
          websites, watching comedy and action movies, along with drawing, 
          writing and playing games. I helped out in this project by creating
          the rudimentary design wireframe (Figma).
        </text>

        <h4> Adam Taylor </h4>
        <h6> Primary Programnmer </h6>
        <text>
          Biography: My name is Adam Taylor. I am a first-year member of
          Business Professionals of America. I am a Senior at Weiss High School.
          I also participate in Code2College, Computer Science Club, and Chess
          Club. My prmiary involvement in the creation of this website mostly
          had to deal with the backend and databases of the project.
        </text>

        <h4> Kamsi Ozorji </h4>
        <h6> Primary Researcher </h6>
        <text>
          {/*Straight out of last year */}
          {/* Please Update */}
          {/* Probably going to use the design from last year*/}
          Biography: My Name is Kamsi Ozorji. I'm a Senior at Weiss High School.
          It's my second year participating in Business Professionals of
          America. I also particpiate in Code2College, where we grow our
          professional and technical skills and intern at a company over the
          summer. I also volunteer at the church that I reguarly attend, RCCG
          Corerstone ATX, whether it's moving equipment, setting up for service,
          troubleshooting problems, and etc. In this project, I was mainly
          involved by conducting research and collecting data from online car
          dealerships to help my team create this amazing website.
        </text>
      </div>
    </div>
  );
}
