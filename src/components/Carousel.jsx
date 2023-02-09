import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Carousel from "./styles/Carousel.css";
import Card from './Card';

export default function Carousel ({ cardsData }) {
    return (
        <div className="carousel-container">
            <h1 className="carousel-header"> What people say about us</h1>
            <Carousel>
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
