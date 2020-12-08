import React, { Component } from "react";
import logo from "./ckc_logo1.jpg";
import "./navbar.css";
import BurgerMenu from "../burger-menu/BurgerMenu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });

      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <nav className={this.state.scrolled ? "nav scrolled" : "nav"}>
        <div id="burger-box">
          <BurgerMenu scroll_listener={this.state.scrolled}/>
        </div>
        <div id="img-box">
          <a href="#navbar-box"><img src={logo} className={this.state.scrolled ? "img-logo-sm" : "img-logo"} alt="On Point Landscaping Logo" /></a>
        </div>
        <ul id="nav-links">
          <li className="nav-link"><a href={this.state.scrolled ? "#about-anchor-2" : "#about-anchor"}>About</a></li>
          <li className="nav-link"><a href={this.state.scrolled ? "#services-anchor-2" : "#services-anchor"}>Services</a></li>
          <li className="nav-link"><a href="#contact-box">Contact</a></li>
          <li className="nav-link">
          <a href="#contact-box"><button id="nav-get-a-quote-btn">GET A QUOTE</button></a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
