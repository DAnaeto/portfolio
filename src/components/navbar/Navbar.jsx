import React from "react";
import "./navbar.scss";


export default function Navbar(props) {

  return (
    <div className={"navbar " + (props.menuOpen && "active")}>
      <div className="wrap">
        <div className="left">
          <a href="#intro" className="logo">
            whoami
          </a>
          
        </div>
        <div className="right">
          <div className="menuicon" onClick={() => props.setMenuOpen(!props.menuOpen)}>
            <span className="topline"></span>
            <span className="midline"></span>
            <span className="botline"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
