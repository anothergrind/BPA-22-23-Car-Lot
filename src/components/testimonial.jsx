import { Carousel, Card } from "react-bootstrap";
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/Testimonial.css";

const cardsData = [
  {
    image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "White male looking at camera with a laptop",
    text: "I had a great experience buying my car from Wolf Dealership. The process was smooth and hassle-free, and I was able to find exactly what I was looking for. Highly recommend!",
    title: "Brandon Gordon"
  },
  {
    image: "https://images.pexels.com/photos/4624915/pexels-photo-4624915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Black lady with her child",
    text: "I was a bit nervous about buying a car online, but the team at Wolf Dealership made it so easy. They answered all my questions and helped me find the perfect car for me. Thanks!",
    title: "Aliyah Peterson"
  },
  {
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "A mixed family",
    text: "I have never had a better car buying experience than I did with Wolf Dealership. They were incredibly helpful and knowledgeable, and made the whole process stress-free. I love my new car!",
    title: "The Williams Family"
  },
  {
    image: "https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "White lady looking at a laptop",
    text: "Wolf Dealership made buying my new car so easy! I was able to find exactly what I was looking for and complete the entire process online. I highly recommend this dealership",
    title: "Ana Miller"
  },
  {
    image: "https://images.pexels.com/photos/8425025/pexels-photo-8425025.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "White old lady looking at a laptop in a car",
    text: "I was skeptical about buying a car online, but Wolf Dealership exceeded all my expectations. The staff was knowledgeable and helpful, and the delivery process was seamless. I couldn't be happier with my purchase.",
    title: "Chloe Burton"
  },
  {
    image: "https://images.pexels.com/photos/5717577/pexels-photo-5717577.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Nice",
    text: "I was on a tight budget and Wolf Dealership helped me find a great car that fit my needs and my budget. The online buying process was easy and efficient, and I was able to get the car I wanted without leaving my house.",
    title: "Arianna Gibbs"
  },
  {
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Mixed guy looking at camera ",
    text: "Wolf Dealership made my car buying experience the best it could be. The staff was friendly and responsive, and I was able to find the exact car I wanted at a great price. I couldn't be happier!",
    title: "Danny Jackson"
  },
  {
    image: "https://images.pexels.com/photos/9518019/pexels-photo-9518019.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "A black father teaching his son how to drive",
    text: "I was looking for a specific make and model, and Wolf Dealership had it in stock. The online process was simple and straightforward, and I was able to complete everything from the comfort of my own home. I would definitely recommend this dealership to anyone.",
    title: "Micah Ali"
  },
  {
    image: "https://images.pexels.com/photos/15044328/pexels-photo-15044328.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Latino guy standing in front of a car",
    text: "Wolf Dealership made buying a car a breeze! The online platform was easy to use, and the team was always there to answer any questions I had. I was able to find the perfect car for me and have it delivered right to my doorstep. I'm so glad I chose Wolf Dealership for my car buying needs!",
    title: "Gabriel Zarate"
  },
];

export default function Testimonial({ cardsData }) {
  return (
    <div className="testimonial-container">
      <Carousel
        className="testimonial-carousel"
      >
        {cardsData.map(({ image, alt, text, title }, index) => (
          <Carousel.Item key={index}>
            <Card 
              image={image} 
              alt={alt} 
              text={text} 
              title={title} 
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

