import { React, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { init } from "ityped";
import "./introduction.scss";

export default function Introduction() {
  const text = useRef();

  useEffect(() => {
    init(text.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Engineer", "Developer"],
    });
  }, []);

  return (
    <div className="introduction" id="intro">
      <div className="left">
        <div className="images">
          <img
            src="sources/portrait.png"
            draggable="false"
            alt="Portrait of me"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrap">
          <h2>Hello, I am</h2>
          <h1>Dominic Anaeto</h1>
          <h3>
            Software <span ref={text}></span>
          </h3>
          {isMobile ? (
            <p className="mobile-note">Note: For the best UX, visit this website on a laptop/desktop! UI enhancements for mobile are in the works.</p>
          ) : null}
        </div>
        <a href="#portfolio">
          <img
            src="sources/arrow.png"
            draggable="false"
            alt="Down arrow to go to next section"
          />
        </a>
      </div>
    </div>
  );
}
