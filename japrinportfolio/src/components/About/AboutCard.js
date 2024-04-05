import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Backya Japrin   </span>
               from <span className="purple"> Tirunelveli,627117 TamilNadu.</span>
            <br />
            I am currently completed my BE Degree as Biomedical Engineer.
            <br />
            
            <br />
            <br />
            Apart from designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore new things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Success doesn't teach u as much but Faliure teach u More in Life"{" "}
          </p>
          <footer className="blockquote-footer">Japrin </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
