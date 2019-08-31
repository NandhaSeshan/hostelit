import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img
          src="./Images/gokarna_beach.jpg"
          alt="logo2"
          className="img_style"
        />
        <p className="passage">
          HosteLIT Backpacker hostels is located in the heart of gokarna with
          good connectivity to nearby tourist attractions. Guests have access to
          locker and WIFI in every dormitory. HosteLIT prides itself in being
          able to provide guests the best value and quality service in Gokarna
          at unmatchable prices, If you are a solo-traveller this place promises
          a laid back and relaxing experience along with our stringent focus on
          quality of service provided. The staff are well trained and well
          equiped to handle any of the guests needs. <br />
          Come stay with us and enjoy the paradise that is Gokarna!
        </p>
      </div>
    );
  }
}

export default Home;
