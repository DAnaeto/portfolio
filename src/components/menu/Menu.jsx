import React from "react";
import "./menu.scss";

export default function Menu(props) {
  const clickHandler = () => {
    props.setMenuOpen(false);
  };

  return (
    <div className={"menu " + (props.menuOpen && "active")}>
      <ul>
        <li onClick={clickHandler}>
          <a href="#intro">
            About Me
          </a>
        </li>
        <li onClick={clickHandler}>
          <a href="#portfolio">
            Portfolio
          </a>
        </li>
        <li onClick={clickHandler}>
          <a href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}
