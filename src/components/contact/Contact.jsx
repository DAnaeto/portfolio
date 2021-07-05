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
      url: "https://www.linkedin.com/in/dominic-anaeto-8b216b1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoTlic3q6Tui0PA42BzoTow%3D%3D",
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
          <div className="container">
            <div className="imgContainer">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.icon} draggable="false" alt="Contact logo" />
              </a>
            </div>
            <div className="textContainer">
              {item.title === "Email" ? (
                <p>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Email me!
                  </a>
                </p>
              ) : (
                <p>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Visit my {item.title}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
