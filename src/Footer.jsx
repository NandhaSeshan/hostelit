import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_style">
        <p className="footer_content">
          © 2018{" "}
          <a className="link_style" href="/">
            HosteLit.in
          </a>
          <br />
          <a className="link_style" href="/">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
