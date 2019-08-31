import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { headers } = this.props;

    const navBar = {
      backgroundColor: "#0d0c0c",
      opacity: "0.9",
      padding: "0px",
      height: "65px"
    };

    const navLinkStyle = {
      backgroundColor: "#0d0c0c",
      color: "#dcdcdc",
      padding: "0px",
      height: "65px",
      zIndex: "1"
    };

    const button = {
      backgroundColor: "#D73A0A",
      margin: "0px 15px 0px 0px",
      borderColor: "black",
      padding: "4px"
    };

    return (
      <div className="stick">
        <Navbar light expand="md" style={navBar}>
          <img src="./images/logo.png" alt="logo" className="image_style" />

          <NavbarToggler onClick={this.toggle} style={button} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {headers.map(header => {
                const { navigateTo, title } = header;
                return (
                  <NavItem>
                    <NavLink href={navigateTo} exact style={navLinkStyle}>
                      <div className="tab">{title}</div>
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
