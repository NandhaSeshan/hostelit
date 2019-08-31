import React from "react";
import Slider from "./Slider.jsx";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
  Button
} from "reactstrap";
import "./Book.css";

class Book extends React.Component {
  render() {
    const items = [
      {
        src: "./Images/gokarna_beach.jpg",
        altText: "AC Room",
        caption: "Make yourself feel like a King",
        header: "AC Room"
      },
      {
        src: "./Images/gokarna_beach.jpg",
        altText: "Non AC Room",
        caption: "Make yourself comfortable",
        header: "Non AC Room"
      },
      {
        src: "./Images/gokarna_beach.jpg",
        altText: "Mixed Dorm",
        caption: "Come feel the vibe",
        header: "Mixed Dorm"
      }
    ];

    const rooms = [
      {
        header: "Header",
        title: "Title",
        source: "./Images/ACRoom.jpg",
        alt: "logo2",
        desc:
          " With supporting text below as a natural lead-in to additional content."
      },
      {
        header: "Header",
        title: "Title",
        source: "./Images/ACRoom.jpg",
        alt: "logo2",
        desc:
          " With supporting text below as a natural lead-in to additional content."
      },
      {
        header: "Header",
        title: "Title",
        source: "./Images/ACRoom.jpg",
        alt: "logo2",
        desc:
          " With supporting text below as a natural lead-in to additional content."
      },
      {
        header: "Header",
        title: "Title",
        source: "./Images/ACRoom.jpg",
        alt: "logo2",
        desc:
          " With supporting text below as a natural lead-in to additional content."
      },
      {
        header: "Header",
        title: "Title",
        source: "./Images/ACRoom.jpg",
        alt: "logo2",
        desc:
          " With supporting text below as a natural lead-in to additional content."
      }
    ];
    const sliderStyle = {
      maxHeight: "200px"
    };
    return (
      <div className="book">
        <div className="slider">
          <Slider items={items} style={sliderStyle} />
        </div>

        <div className="cards" id="container">
          {rooms.map(room => {
            const { header, title, source, alt, desc } = room;
            return (
              <Card
                className="card"
                style={{
                  minWidth: "305px",
                  maxWidth: "300px",
                  maxHeight: "400px"
                }}
              >
                <CardHeader>{header}</CardHeader>
                <CardBody>
                  <CardTitle>{title}</CardTitle>
                  <img src={source} alt={alt} className="imageStyle" />
                  <CardText>{desc}</CardText>
                </CardBody>
              </Card>
            );
          })}
        </div>
        <div className="button_book">
          <Button color="secondary" size="lg" active>
            Link
          </Button>
        </div>
      </div>
    );
  }
}

export default Book;
