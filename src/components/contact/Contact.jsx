import React from "react";
import "./contact.scss";
//import { MailOutline, PhoneIphone } from "@material-ui/icons";

import "./contact.scss";

export default function Contact() {
  const data = [
    {
      id: "1",
      title: "LinkedIn",
      icon: "sources/linkedin.png",
      url: "https://www.linkedin.com/in/dominicanaeto",
    },

    {
      id: "2",
      title: "GitHub",
      icon: "sources/github.png",
      url: "https://github.com/DAnaeto",
    },

    {
      id: "3",
      title: "Email",
      email: "danaeto@protonmail.com",
      icon: "sources/mail.png",
      url: `mailto:danaeto@protonmail.com`,
    },
  ];
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="sources/shake.svg" draggable="false" alt="A handshake" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        {data.map((item) => (
          <a href={item.url} target="_blank" rel="noreferrer">
            <div className="container">
              <div className="imgContainer">
                <img src={item.icon} draggable="false" alt="Contact logo" />
              </div>
              <div className="textContainer">
                {item.title === "Email" ? (
                  <p>Email me!</p>
                ) : (
                  <p>Visit my {item.title}</p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
