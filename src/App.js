import React from 'react';
import "./reset.css"
import "./index.css"
import Navbar from "./components/navbar/Navbar.js"
import Hero from "./components/hero/Hero.js"
import About from "./components/about/About.js"
import Services from "./components/services/Services.js"
import Contact from "./components/contact/Contact.js"

function App() {
  return (
    <div className="App">
      <section id="navbar-box">
        <Navbar />
      </section>
      <section id="hero-box">
        <Hero />
        <div id="about-anchor"></div>
        <div id="about-anchor-2"></div>
      </section>
      <section id="about-box">
        <About />
        <div id="services-anchor"></div>
        <div id="services-anchor-2"></div>
      </section>
      <section id="services-box">
        <Services />
        <div id="contact-anchor"></div>
        <div id="contact-anchor-2"></div>
      </section>
      <section id="contact-box">
        <Contact />
      </section>
    </div>
  );
}

export default App;
