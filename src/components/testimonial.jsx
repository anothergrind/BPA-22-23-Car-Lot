import { Carousel, Card, CardGroup } from "react-bootstrap";
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/Testimonial.css";

export default function Testimonial() {
  return (
    <div className="container carousel Container" variant="dark">
      <Carousel>
        <Carousel.Item>
          <CardGroup className="cardGroup">
            <Card style={{ width: "20rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Janet Bailey</Card.Title>
                <Card.Text>
                  "I had a great experience buying my car from WolfDrive. The
                  process was smooth and hassle-free, and I was able to find
                  exactly what I was looking for. Highly recommend!"
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Leo Carter</Card.Title>
                <Card.Text>
                  "I was a bit nervous about buying a car online, but the team
                  at WolfDrive made it so easy. They answered all my questions
                  and helped me find the perfect car for me. Thanks!"
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Janine Holland</Card.Title>
                <Card.Text>
                  "I have never had a better car buying experience than I did
                  with WolfDrive. They were incredibly helpful and
                  knowledgeable, and made the whole process stress-free. I love my new car!"
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="card-group">
            <Card style={{ width: "20rem" }} className="cards">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Carmen Garcia</Card.Title>
                <Card.Text>
                  "WolfDrive made buying my new car so easy! I was able to find exactly what I was looking for and complete the entire process online. I highly recommend this dealership."
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Nakala Washington</Card.Title>
                <Card.Text>
                  "I was skeptical about buying a car online, but WolfDrive
                  exceeded all my expectations. The staff was knowledgeable and helpful, and the delivery process was seamless. I couldn't be happier with my purchase."
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }} className="cards">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Michella Harrison</Card.Title>
                <Card.Text>
                  "I was on a tight budget and WolfDrive helped me find a great car that fit my needs and my budget. The online buying process was easy and efficient, and I was able to get the car I wanted without leaving my house."
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="card-group">
            <Card style={{ width: "20rem" }} className="cards">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Rodnell Douglas</Card.Title>
                <Card.Text>
                  "WolfDrive made my car buying experience the best it could be. The staff was friendly and responsive, and I was able to find the exact car I wanted at a great price. I couldn't be happier!"
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }} className="cards">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Omar Jackson</Card.Title>
                <Card.Text>
                  "I was looking for a specific make and model, and WolfDrive
                  had it in stock. The online process was simple and
                  straightforward, and I was able to complete everything from
                  the comfort of my own home. I would definitely recommend this dealership to anyone."
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }} className="cards">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Datreon Harrison</Card.Title>
                <Card.Text>
                  "WolfDrive made buying a car a breeze! The online platform was easy to use, and the team was always there to answer any
                  questions I had. I was able to find the perfect car for me and have it delivered right to my doorstep. I'm so glad I chose WolfDrive for my car buying needs!"
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
