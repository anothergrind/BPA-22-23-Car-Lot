import React from "react";
import { useState, useEffect } from"react";
import { useParams } from "react-router-dom";
import Sections from "../components/Sections.jsx";
import CarInfo from "../components/CarInfo.jsx";
import "../styles/Sections.css";
import "../styles/CarInfo.css";
// about us page

export default function CarInfoPage() {
  window.scrollTo(0, 0)

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
    the_header = "Schedule your appointment today!"
    body_id = "appointment-body"
    image_url = "https://cdn.discordapp.com/attachments/538152936518189058/1052006874653933578/MeHeadshot.jpg"
    image_id = "professional-kamsi"
    para_id = "prof-info"
    paragraph5 = "Phone one of our professionals: +1 512-594-1400"
    paragraph6 = "Email to make sure we stay in contact: weiss.wolves.dealership@gmail.com"
    paragraph7 = "Address: 5201 Wolf Pack Dr, Pflugerville, TX 78660"
    />
    </>
  );
}
