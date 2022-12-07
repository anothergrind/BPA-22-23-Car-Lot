import React from "react";
import { Button } from "react-router-dom";
import Form from "react-bootstrap";
import Stack from "react-bootstrap";
import "../styles/sections.css";
import "../styles/explore.css";

export default function SearchSection() {
  return (
    <div className="section-container" id="section-three">
      <br/>
      <h1>Start Shopping</h1>
        <form className="search-bar" id="section-search">
          <input type="search" id="query" name="q" place  holder="Seach..." />
          <button>Search</button>
          <h4>Advanced Filter</h4>
        </form>
    </div>
  );
}
