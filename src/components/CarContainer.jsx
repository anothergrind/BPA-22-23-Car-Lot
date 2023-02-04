import React from "react";
import "../styles/Inventory.css";
import "../styles.css";

// component for hero section used in the home page
export default function Car_container(props) {
  return (
    <>
    <div className="car-container">
      <img className="car-image" src={props.image_url} alt="car-image" />
      <h1>Name: {props.name}</h1>
      <h1>Price Range: {props.price_range}</h1>
      <h1>Mileage: {props.mileage}</h1>
    </div>
    </>
  );
}
