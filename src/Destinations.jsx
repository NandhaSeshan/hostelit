import React, { Component } from "react";
import "./Destinations.css";

class Destinations extends Component {
  render() {
    const destinations = [
      {
        name: "Gokarna",
        image: "./images/gokarna_sunset.jpg",
        description:
          "If tranquillity is what you seek and an offbeat beach experience excites you, Gokarna is where you should be. Go on hikes, watch the waves crash on rocks as you admire the sunset, or simply relax and let time pass by; there is a lot you can do in Gokarna. A great way to explore the beaches of Gokarna is to go on a beach hike on a trail which connects five of the major beaches of the town. The cool sea breeze and beautiful sea view will help you chill in peace with travelers from around the world at HosteLit Gokarna. Be it from the sea-facing dormitories or Private shacks, you will be mesmerised and may never want to leave! Just don’t forget to have a bite in the in-house cafe, which also happens to overlook the sea.",
        imageAlt: "gokarna"
      }
    ];
    return (
      <div className="dest_page">
        <div className="destinations">
          {destinations.map(destination => {
            const { name, image, imageAlt, description } = destination;
            return (
              <div className="destination_style">
                <br />
                <br />
                <div className="container">
                  <img src={image} alt={imageAlt} className="dest_image" />
                  <div class="centered">{name}</div>
                </div>
                <p className="desc_style">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Destinations;
