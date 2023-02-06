import React, { useState } from "react";
import "../styles/Sections.css";
import "../styles/AboutUs.css";
import Sections from "./Sections.jsx";
import Modal from "./Modal.jsx";

export default function DeveloperInfo(props) {
  const [daniel, setDanInfo] = useState(false);
  const [adam, setAdamInfo] = useState(false);
  const [kamsi, setKamInfo] = useState(false);

  const toggleDan = () => setDanInfo(!daniel);
  const toggleAdam = () => setAdamInfo(!adam);
  const toggleKam = () => setKamInfo(!kamsi);



  async function clickDaniel(event) {
    event.preventDefault();
    toggleDan();
  }

  async function clickAdam(event) {
    event.preventDefault();
    toggleAdam();
  }

  async function clickKamsi(event) {
    event.preventDefault();
    toggleKam();
  }

  return (
    <>
      <div className="devInfo">
        <h1>The People Behind Wolves Dealership</h1>

        {daniel && (
          <Modal 
          image="https://cdn.discordapp.com/attachments/1022660409167183933/1052005712898830336/daniel.png"
          title="Daniel Mekuria - Chief Executive Officer"
          text="Biography: Hey, my name is Daniel Mekuria. I am a fourth-year member of
            BPA and the President of the Weiss BPA chapter. I am a senior at Weiss High School, with a Health
            Science Pathway. I also participate in the HOSA Chapter at Weiss High
            School, My Brother's Keeper Chapter (MBK) as the secretary, and a
            volunteer organization (outside of school) called Austin Ethiopian
            Orthodox Tewahedo Youth (AEOTY) as the Service Coordinator, and I
            also volunteer in my church at St. Raguel Church, Manor, TX. I love
            making websites (especially when it works); it's also a cool thing to
            brag about to your friend. I also love watching comedy movies and
            action (but action comedy is the best of both worlds). I like to draw, write (just not essays),
            play games. My involvement in this project is creating the rudimentary
            design of this website's UI interface (via Figma)."
          />
        )}

        {adam && (
          <Modal
            id="adam-blurb"
            title="Adam Taylor - Chief Technology Officer"
            image="https://cdn.discordapp.com/attachments/538152936518189058/1051988399449448458/Me_again.jpg"
            text="Biography: Hi my name is Adam Taylor, I'm a Senior at Weiss High School, and this is my first year participating in Business Proffesionals of America. 
            I founded the Weiss Computer Science Club, and co-founded the Weiss Chess Club.
            In my Junior year I fell in love with coding, and saw BPA as an opportunity to truly test my skills.
            My participation in this project was the programming for the website's front and back-end."
          />
        )}

        {kamsi && (
          <Modal
            id="Kamsi-blurb"
            title="Kamsi Ozorji - Sales Director"
            image="https://cdn.discordapp.com/attachments/1022660409167183933/1051985284151136296/IMG_20220601_105154014.jpg"
            text="Biography: My Name is Kamsi Ozorji. I'm a Senior at Weiss High School.
            It's my second year participating in Business Professionals of
            America. I also particpiate in Code2College, where we grow our
            professional and technical skills and intern at a company over the
            summer. I also volunteer at the church that I reguarly attend, RCCG
            Corerstone ATX, whether it's moving equipment, setting up for service,
            troubleshooting problems, and etc. In this project, I was mainly
            involved by conducting research and collecting data from online car
            dealerships to help my team create this amazing website.."

          />
        )}

        <div className="theBody" id="devBody">
          <div className="devCard" onClick={clickDaniel}>
            <h2>Daniel Mekuria</h2>
            <h3>Chief Executive Officer</h3>
          </div>

          <div className="devCard" onClick={clickAdam}>
            <h2>Adam Taylor</h2>
            <h3>Chief Technology Officer</h3>
          </div>

          <div className="devCard" onClick={clickKamsi}>
            <h2>Kamsi Ozorji</h2>
            <h3>Sales Director</h3>
          </div>
        </div>
      </div>
    </>
  );
}
