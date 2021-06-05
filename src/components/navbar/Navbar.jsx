import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrap">
        <div className="left">
          <a href="#intro" className="logo">whoami</a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
