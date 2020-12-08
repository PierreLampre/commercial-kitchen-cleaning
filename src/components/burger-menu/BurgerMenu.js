import React, { Component } from "react";
import "./burger-menu.css";

class BurgerMenu extends Component {

  render() {
    return (
      <div id="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div id="hamburger">
          <div></div>
        </div>
        <div id="menu">
          <div>
            <div>
              <ul id="link-box">
                <li>
                  <a href={this.props.scroll_listener ? "#about-anchor-2" : "#about-anchor"}>About</a>
                </li>
                <li>
                  <a href={this.props.scroll_listener ? "#services-anchor-2" : "#services-anchor"}>Services</a>
                </li>
                <li>
                  <a href={this.props.scroll_listener ? "#contact-anchor-2" : "#contact-anchor"}>Contact</a>
                </li>
                <li>
                  <a href={this.props.scroll_listener ? "#contact-anchor-2" : "#contact-anchor"}>Get A Quote</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
