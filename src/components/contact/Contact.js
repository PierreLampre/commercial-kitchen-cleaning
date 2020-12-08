import React from "react";
import "./contact.css";
import Form from "../form/Form.js";
import phone from "./phone.svg";
import mail from "./mail.svg";
import fbook from "./fbook.svg";
import google from "./google.svg";

export default function Contact() {
  return (
    <div id="contact">
      <div id="form-and-info-box">
        <div id="form">
          <Form />
        </div>
        <div id="info">
          <div id="num-and-add">
            <span className="contact-info">
              <a href="tel:856-691-1162">
                <img src={phone} className="con-icon" alt="a telephone" />
              </a>
              <h3 className="actual-info">
                <a href="tel:856-691-1162">(856) 691-1162</a>
              </h3>
            </span>
            <span className="contact-info">
              <a id="mailto-me" href="mailto:pierrelampre@gmail.com">
                <img
                  src={mail}
                  className="con-icon"
                  alt="the back of an envelope"
                />
              </a>
              <h3 className="actual-info">
                <a id="mailto-me" href="mailto:pierrelampre@gmail.com">
                  thisguy@thisguy.com
                </a>
              </h3>
            </span>
          </div>
          <div id="soc-med-icons">
            <span className="smicon">
              <a
                href="https://www.facebook.com/CKCPowerwash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fbook}
                  id="fbicon"
                  className="sm-icon-img"
                  alt="facebook icon"
                />
              </a>
              <span className="follow">
                <a
                  href="https://www.facebook.com/On-Point-Lawn-Co-110444680734696/?ref=page_internal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow
                </a>
              </span>
            </span>
            <span className="smicon">
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJbTfPeaAtx4kRw-A8oqKn7D0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={google}
                  id="gicon"
                  className="sm-icon-img"
                  alt="google icon"
                />
              </a>
              <span className="follow">
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJbTfPeaAtx4kRw-A8oqKn7D0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review
                </a>
              </span>
            </span>
          </div>
          <div id="address">
            <p>Commercial Kitchen Cleaning</p>
            <p>2220 N East Ave, Vineland, NJ 08360</p>
          </div>
        </div>
      </div>
      <div id="footer">
        <span id="mailto-box">
          This site was built by
          <a id="mailto-wm" href="mailto:pierrelampre@gmail.com">
            Justin Lampe
          </a>
          with React.
        </span>
      </div>
    </div>
  );
}
