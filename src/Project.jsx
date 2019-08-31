import React from "react";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Destinations from "./Destinations.jsx";
import Book from "./Book.jsx";
import "./Project.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Project extends React.Component {
  render() {
    const headers = [
      {
        title: "HOME",
        navigateTo: "/"
      },
      {
        title: "CONTACT",
        navigateTo: "/contact"
      },
      {
        title: "ABOUT",
        navigateTo: "/about"
      },
      {
        title: "DESTINATION",
        navigateTo: "/destinations"
      },
      {
        title: "BOOK NOW",
        navigateTo: "/book"
      }
    ];
    return (
      <div className="App Site">
        <div className="Site-content">
          <Router>
            <Header className="App-header" headers={headers} />
            <div className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/destinations" component={Destinations} />
                <Route path="/book" component={Book} />
              </Switch>
            </div>
          </Router>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Project;
