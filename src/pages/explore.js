import React from "react";
import "../styles/explore.css";
import placeholder from "../pictures/about_us_hero.png";
import mercedes_placeholder from "../pictures/carHero.png";
import { useState, useEffect } from "react";
import Car_container from "../components/car_container";
import Sidebar from "../components/sidebar"

// shopping page
export default function explore() {

  const [car, setCar] = useState([]);
  const [query, setQuery] = useState("");

  const cars = async() => {
    const response = await fetch('http://localhost:8000/get-cars')

    setCar(await response.json())
  }


  async function searchSubmit(event) {
    const categories = ["name", "price_range", "mileage", "fuel_type", "lifestyle", "make", "model", "year", "condition", "body_type", "cylinder", "price"]

    event.preventDefault();
    const response = await fetch(`http://localhost:8000/search-cars?category=name&parameter=${encodeURIComponent(query)}`)
    setCar(await response.json())
  }

  useEffect(() => { cars()}, [])


  return (
    <>
    <body style={{backgroundColor: "#cccccc"}}>
    <Sidebar
    fuel = "Fuel type"
    lifestyle = "Lifestyle"
    make = "Make"
    model = "Model"
    year = "Year"
    condition = "Condition"
    mileage = "Mileage"
    body_type = "Body Type"
    cylinder = "Cylinder"
    price = "price"
    
    />
      <div className="search-section">
        <form className="search-bar" onSubmit={searchSubmit} id="explore-search">
          <input type="search" id="query" name="q" placeholder="Seach..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <button>Search</button>
        </form>
      </div>
      <div className="cars-gallery">
        { car.map((data) => {
          return(
            <>
            <Car_container 
            image_url = {data.image_url}
            name = {data.name}
            price_range = {data.price_range}
            mileage = {data.mileage}/>
            </>)})}
      </div>
      </body>
    </>
  );
}
