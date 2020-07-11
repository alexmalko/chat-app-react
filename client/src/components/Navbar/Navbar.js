import React from "react";
import "./navbar.css";

export default function header() {
  return (
    <div className="Navbar">
      <i className="fas fa-bars"></i>
      <div className="icons">
        <i className="fas fa-arrow-left"></i>
        <i className="fas fa-arrow-right"></i>
        <i className="far fa-clock"></i>
        <input type="text" className="search" placeholder="Search within App" />
        <i className="far fa-question-circle"></i>
      </div>
      <i className="fas fa-times"></i>
    </div>
  );
}
