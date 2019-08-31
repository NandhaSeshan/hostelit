import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
          <h1 className="header">About Us</h1>
          <div className="inner_content">
            <p className="about_text">
              Something about my travels and start of this company. You will
              find the latest information about us on this page. Our company is
              constantly evolving and growing. We provide wide range of
              services. Our mission is to provide best solution that helps
              everyone. If you want to contact us, please fill the contact form
              on our website. We wish you a good day! You will find the latest
              information about us on this page. Our company is constantly
              evolving and growing. We provide wide range of services. Our
              mission is to provide best solution that helps everyone. If you
              want to contact us, please fill the contact form...
            </p>
            <img
              src="./images/logo3.png"
              alt="bagpacker"
              className="about_image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
