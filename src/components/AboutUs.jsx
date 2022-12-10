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
          Biography: Hey, my name is Daniel Mekuria. I am a third-year member of
          BPA (2019-20 State Qualifier for Fundamental of Web Design
          Competition). I am a senior at Weiss High School, with a Health
          Science Pathway. I also participate in the HOSA Chapter at Weiss High
          School, My Brother's Keeper Chapter (MBK) as the secretary, and a
          volunteer organization (outside of school) called Austin Ethiopian
          Orthodox Tewahedo Youth (AEOTY) as the Service Coordinator , and I
          also volunteer in my church at St. Raguel Church, Manor, TX. I love
          making websites (especially when it works); it's also a cool thing to
          brag about to your friend. I also love watching comedy movies and
          action (but action comedy is the best of both worlds). I play video
          games such as Assassin's Creed, Mafia III, Call Of Duty, and some
          others. I like to draw, write (just not essays), and compose music (a
          little). My involvement in this project is creating most of the HTML
          infrastructure of this website and the JavaScript portion of the
          website.
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
