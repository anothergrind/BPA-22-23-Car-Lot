import React from "react";
import CarInfoPage from "./CarInfo";
import "../styles/Inventory.css";
import "../styles/Search.css";
import { useState, useEffect } from "react";
import CarContainer from "../components/CarContainer";
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom";

// shopping page
export default function inventory() {
  window.scrollTo(0, 0)

  const [car, setCar] = useState([]);
  const [query, setQuery] = useState("");

  const cars = async() => {
    const response = await fetch('http://localhost:8000/get-cars')

    setCar(await response.json())
  }


  async function searchSubmit(event) {
    const categories = ["name", "price", "mileage", "fuel_type", "lifestyle", "make", "model", "year", "condition", "body_type", "cylinder", "price"]

    
    event.preventDefault();
    for(let i = 0; i < categories.length; i++){  
    
      const response = await fetch(`http://localhost:8000/search-cars?category=${categories[i]}&parameter=${encodeURIComponent(query)}`)
      const the_response = await response.json()
      if(the_response.length > 0) {
        return the_response
      }
    }
    return
  }

  async function searchResult(event) {
    event.preventDefault();

    for(let i = 0; i < 12; i++) {
      const searchRequest = await searchSubmit(event)
      if(searchRequest.length > 0){
        setCar(await searchRequest);
      }
    else {
      setCar([])
      }
    }
  }



  async function filter(event) {
    query = input
    const response = await fetch(`https://ab362e678f4a.ngrok.io/search-cars?category=${categories[i]}&parameter=${encodeURIComponent(query)}`)
  };


  useEffect(() => { cars()}, [])
  return (
    <>
    <body style={{backgroundColor: "#cccccc"}}>
    {/* <Sidebar
    filter = {filter}
    fuel_type = "Fuel type"
    lifestyle = "Lifestyle"
    make = "Make"
    model = "Model"
    year = "Year"
    condition = "Condition"
    mileage = "Mileage"
    body_type = "Body Type"
    cylinder = "Cylinder"
    price = "price"
    
    /> */}
      <div className="search-section">
        <form className="search-bar" onSubmit={searchResult} id="inventory-search">
          <input type="search" id="query" name="q" placeholder="Search for cars..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <button id="inventory-search-button">Search</button>
        </form>
      </div>
      <div className="cars-gallery">
        { car.map((data) => {
          return(
            <>
            <Link id="car-link" to={`/car_info/${encodeURIComponent(data.id)}`} element= {<CarInfoPage />}>
            <CarContainer 
            image_url = {data.image_url}
            name = {data.name}
            price = {data.price}
            mileage = {data.mileage}/>
            </Link>
            </>)})}
      </div>
      </body>
    </>
  );
}
