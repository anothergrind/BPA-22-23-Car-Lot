import React from "react";
import Modal from "./Modal"; 
import "../styles/MultiImageSection.css"

export default function MultiSection(props) {
  return (
    <div className="multi-section-container" id={props.id}>
      <h1>{props.header}</h1>
      <div className = "reviewer-images">
        <Modal
            image={props.image_url3}
            alt="Black woman and her son looking at the dealership through the same laptop"
            title="Aliyah P. with her son Jasper"
            text="As a single mother with a child, finding a reliable and affordable car was a top priority for me. I stumbled upon this online dealership and I'm so grateful I did. Adam went above and beyond to ensure I found the perfect car for me and my child. Their kindness and knowledge made the whole process stress-free and enjoyable. I highly recommend this dealership to any single parent in need of a new vehicle. Thank you Adam for making my life easier!"
        />
        <Modal
          image={props.image_url4}
          alt="A family looking at the same laptop"
          title="The Williams family"
          text="We recently purchased a car from this online dealership as a family and it was a seamless experience. Daniel was incredibly accommodating, taking the time to listen to our needs and answering all of our questions. The online platform made it easy for us to compare different options and find the perfect car for our family. We are so grateful for the excellent customer service and the great deal we received."
        />
        <Modal
          image={props.image_url5}
          alt="Middle aged white lady searching for cars on her laptop"
          title="Ana M."
          text="I recently lost my car in a car crash and was in need of a new one as soon as possible. I came to Wolves Dealership and was immediately impressed by their friendly and knowledgeable staff. Kamsi was able to find me a better car for a better price than I ever could have imagined. I am so grateful for the team at Wolves Dealership, they made the process so easy and stress-free. Thank you so much from the bottom of my heart"
        />
      </div>
    </div>
  );
}
