import React, { Component } from "react";
import "./form.css";
import emailjs from "emailjs-com";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      emailError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showAlert = () => {
    
    let msg = document.getElementById("msg-sent");

    msg.classList.add("msg-animate");

    setTimeout(
      function(){
        msg.classList.remove("msg-animate");
      },
      3500
    );

  }

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z4ra8nc",
        "on_point_landscaping",
        "#contact-form",
        "user_JWezElB1yOIeWcY23iWSD"
      )
      .then()
      .catch();
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    this.showAlert();
  };

  render() {
    return (
      <div id="form-box">
        <div id="msg-sent">Message Sent!</div>
        <h3 id="contact-us">Contact Us</h3>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div id="name-and-email-box">
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="form-input"
              id="name"
              onChange={this.handleChange}
              placeholder="Name"
              required
            ></input>

            <input
              type="email"
              name="email"
              value={this.state.email}
              className="form-input"
              id="email"
              onChange={this.handleChange}
              placeholder="Email"
              required
            ></input>
          </div>

          <div id="subject">
            <input
              type="subject"
              name="subject"
              value={this.state.subject}
              id="subj-input"
              onChange={this.handleChange}
              placeholder="Subject"
              required
            ></input>
          </div>

          <div id="message">
            <textarea
              rows="5"
              name="message"
              value={this.state.message}
              id="msg-input"
              onChange={this.handleChange}
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div id="submit-btn-box">
            <button id="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
