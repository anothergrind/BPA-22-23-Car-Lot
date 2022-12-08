import React from "react";
import "../styles/explore.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Sidebar(props) {

  return (
    <div className="sidebar-container">
        <h1>Filter</h1>

        <Link className="sidebar_link">
        <h2>{props.fuel_type}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.lifestyle}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.make}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.model}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.year}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.condition}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.mileage}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.body_type}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.cylinder}</h2>
        </Link>

        <Link className="sidebar_link">
        <h2>{props.price}</h2>
        </Link>
        </div>
  );
}
