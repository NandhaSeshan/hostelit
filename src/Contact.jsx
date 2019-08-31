import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  redirectToBookingWindow = () => {
    window.open("api.whatsapp.com/send?phone=7259788440");
  };
  render() {
    return (
      <div className="contacts">
        <h2>Contact</h2>
        <a href="mailto:gnandhaseshan@gmail.com">Click here</a>

        <button onClick={this.redirectToBookingWindow}>
          <span>Book Now</span>
        </button>
      </div>
    );
  }
}

export default Contact;
