import React from 'react';
import "../styles/Card.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";


export default function Card({image, alt, text, title}) {
    return(
        <Card className="cards">
            <Card.Img
                variant="top"
                src={image}
                alt={alt}
                className="card-picture"
            />
            <Card.Body>
                <Card.Title className="card-title"> {title} </Card.Title>
                <Card.Text className="card-text"> {text} </Card.Text>
            </Card.Body>
        </Card>
    );
}