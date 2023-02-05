import React from "react";
import "./styles.css";
import carHero from "./pictures/carHero.png";
import Hero from "./components/Hero.jsx";
import "./styles/Sections.css";
import Sections from "./components/Sections.jsx";
import MultiSection from "./components/MultiImageSection.jsx";
import SearchSection from "./components/SearchSection.jsx";

// default website page
export default function Home() {
  return (
    <>
      <div className="App">
        <Hero
          text="Cars that fit your plan"
          backgroundImage="https://www.supercars.net/blog/wp-content/uploads/2020/11/2017-Mercedes-Benz-SL63-AMG-003-2000-scaled.jpg"
        />
        <Sections
          id="dealership-description"
          header="About this dealership"
          image_url="https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600"
          paragraph1="Wolves Dealership is an online car business that provides a convenient and hassle-free way for you to purchase your dream car. We offer a wide selection of quality new and used vehicles from all the major brands. Our dealership aims to provide people with high-quality cars at an affordable price that users agree with."
        />
        <MultiSection
          id="tempid"
          header="Testimonials"
          image_url1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiPhZnIOCpFl0oSWXANSZw38xanUiqkfwKQ&usqp=CAU"
          image_url2="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
          image_url3="https://images.pexels.com/photos/4624915/pexels-photo-4624915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          image_url4="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
          image_url5="https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <SearchSection />
      </div>
    </>
  );
}
