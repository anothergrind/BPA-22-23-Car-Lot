import React from "react";
import { useState, useEffect } from"react";
import { useParams } from "react-router-dom";
import Hero from "../components/hero.jsx";
import Sections from "../components/sections.jsx";
import CarInfo from "../components/car_info.jsx";
import "../styles/sections.css";
import "../styles/car_info.css";
// about us page

export default function CarInfoPage() {

  const get_id = useParams();

  const id = get_id['id']

  const [car, setCar] = useState([]);




  const cars = async() => {
    const response = await fetch(`http://localhost:8000/get-car?id=${encodeURIComponent(id)}`)

    setCar(await response.json());
    scrollTo(0,0)
    
  }

  useEffect(() => { cars()}, [])


  
  return (
    <>
        { car.map((data) => {
      return(
        <CarInfo
        image_url = {data.image_url}
        extra_images1 = {data.extra_image1}
        extra_images2 = {data.extra_image2}
        extra_images3 = {data.extra_image3}
        extra_images4 = {data.extra_image4}
        extra_images5 = {data.extra_image5}
        the_value1 = {data.model}
        the_value2 = {data.make}
        the_value3 = {data.fuel_type}
        the_value4 = {data.cylinder}
        the_value5 = {data.year}
        the_value6 = {data.condition}
        />
        )})}
    <Sections 
    id="schedule-appointmnet"
    header = "Schedule your appointment today!"
    image_url = "https://uploads.codesandbox.io/uploads/user/4c2a8a2f-dad6-413e-bf24-18c8e11392c7/lV8i-about_us_hero.png"
    paragraph2 = "Phone Number"
    paragraph3 = "Email"
    paragraph4 = "Address"
    />
    </>
  );
}
