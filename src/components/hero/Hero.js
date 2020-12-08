import React from 'react'
import "./hero.css"

export default function Hero() {
    return (
        <div id="hero">
            <div id="overlay">
                <div id="msg-container">
                    <h1 id="heading">Commercial Kitchen Cleaning</h1>
                    <h3 id="heading-subtitle">Certified Kitchen Exhaust Cleaning</h3>
                    <div id="btn-box">
                        <a href="#contact-anchor" className="quote-link"><button id="get-a-quote-btn" className="quote-btn">GET A QUOTE</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
