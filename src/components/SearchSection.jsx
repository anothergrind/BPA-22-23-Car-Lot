import React from "react";
import { Button } from "react-router-dom";
import Form from "react-bootstrap";
import Stack from "react-bootstrap";
import "../styles/Sections.css";
import "../styles/Inventory.css";

export default function SearchSection() {
  return (
    <div className="section-container" id="section-three">
      <h1>Hit Inventory in the navbar to start shopping!</h1>
        {/* <form className="search-bar" id="section-search">
          <input type="search" id="query" name="q" place  placeholder="Search..." />
          <a href="/inventory"> 
            <button id="click">Search</button>
          </a> */}
          {/* <a href="/inventory">
            <h4 id="filter">Advanced Filter</h4>
          </a> */}
        {/* </form> */}
    </div>
  );
}
