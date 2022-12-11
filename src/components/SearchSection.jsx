import React from "react";
import { Button } from "react-router-dom";
import Form from "react-bootstrap";
import Stack from "react-bootstrap";
import "../styles/Sections.css";
import "../styles/Explore.css";

export default function SearchSection() {
  return (
    <div className="section-container" id="section-three">
      <br/>
      <h1>Start Shopping</h1>
        <form className="search-bar" id="section-search">
          <input type="search" id="query" name="q" place  placeholder="Search..." />
          <a href="/explore"> 
            <button id="click">Search</button>
          </a>
          <a href="/explore">
            <h4 id="filter">Advanced Filter</h4>
          </a>
        </form>
    </div>
  );
}
