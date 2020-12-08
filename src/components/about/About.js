import React from "react";
import "./about.css";
import kitch2 from "./kitch2.jpg";
import kitch3 from "./kitch3.jpg";
import check from "./check.svg";
import phone from "./phone.svg";

export default function About() {
  return (
    <div id="about">
      <div id="about-img-box">
        <img src={kitch2} id="lawn-pic" alt="a fresh cut lawn" />
        <img src={kitch3} id="cut-pic" alt="a push mower mowing a lawn" />
      </div>
      <div id="about-story-box">
        <h3 id="about-heading">Commercial Kitchen Cleaning</h3>
        <h5 id="about-heading-subtitle">
          Kitchen Cleaning Services for the Tri-State Area
        </h5>
        <p className="about-story">
          Bacon ipsum dolor amet fatback shank tail jerky. Meatball bresaola
          ball tip kielbasa jerky short ribs ground round, buffalo corned beef
          pig sirloin pork porchetta tail. Chicken pork belly shank fatback
          short loin ribeye bresaola rump beef ribs salami tail pastrami
          kielbasa tri-tip andouille. Ham hock jerky flank corned beef.
          Frankfurter capicola leberkas bacon
        </p>
        <p className="about-story">
          Turducken bacon turkey chislic spare ribs ham hock meatball andouille
          pork chop beef ribs jerky chuck. Tenderloin tri-tip kevin short loin
          hamburger rump. Jowl picanha shank
        </p>
        <div className="almost-an-ol">
          <img
            src={check}
            className="check-bullet"
            alt="a check mark styled bulletpoint"
          />
          <span className="blurb">Local South Jersey Small Business</span>
        </div>
        <div className="almost-an-ol">
          <img
            src={check}
            className="check-bullet"
            alt="a check mark styled bulletpoint"
          />
          <span className="blurb">Quality work. Every job. Guaranteed.</span>
        </div>
      </div>
      <div id="about-call-for-quote-box">
        <h3 id="call-us-header1" className="cuh">
          Call us now for a quote
        </h3>
        <span id="num-and-icon-box">
          <a href="tel:856-691-1162">
            <img src={phone} id="phone-icon" alt="a graphic of a phone" />
          </a>
          <h3 id="call-us-header2" className="cuh">
            <a href="tel:856-691-1162">(856) 691-1162</a>
          </h3>
        </span>
      </div>
    </div>
  );
}
