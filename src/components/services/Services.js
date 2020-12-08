import React from "react";
import "./services.css";
import check from "./check-green.svg";
import kitch4 from "./kitch4.jpg";

export default function Services() {
  return (
    <div id="services">
      <div id="header-and-img">
        <h6 id="small-heading">COMMERCIAL KITCHEN CLEANING</h6>
        <h3 id="services-heading">Our Services</h3>
        <img
          src={kitch4}
          id="lawnTrees"
          alt="a lawn with landscaped trees and mulch"
        />
      </div>
      <div id="bulletpoints">
        <span className="bullet">
          <img
            src={check}
            className="green-check"
            alt="a green checkmark graphic"
          />
          <span className="blurb-head-box">
            <h4 className="blurb-heading">Service</h4>
            <p className="serv-blurb">
              Bacon ipsum dolor amet shankle bacon andouille brisket swine,
              hamburger sirloin biltong cow flank. Tri-tip burgdoggen tail
              meatloaf short ribs jowl, corned beef tongue beef ribs
            </p>
          </span>
        </span>
        <span className="bullet">
          <img
            src={check}
            className="green-check"
            alt="a green checkmark graphic"
          />
          <span className="blurb-head-box">
            <h4 className="blurb-heading">Service</h4>
            <p className="serv-blurb">
              Bacon ipsum dolor amet shankle bacon andouille brisket swine,
              hamburger sirloin biltong cow flank. Tri-tip burgdoggen tail
              meatloaf short ribs jowl, corned beef tongue beef ribs
            </p>
          </span>
        </span>
        <span className="bullet">
          <img
            src={check}
            className="green-check"
            alt="a green checkmark graphic"
          />
          <span className="blurb-head-box">
            <h4 className="blurb-heading">Service</h4>
            <p className="serv-blurb">
              Bacon ipsum dolor amet shankle bacon andouille brisket swine,
              hamburger sirloin biltong cow flank. Tri-tip burgdoggen tail
              meatloaf short ribs jowl, corned beef tongue beef ribs
            </p>
          </span>
        </span>
      </div>
    </div>
  );
}
