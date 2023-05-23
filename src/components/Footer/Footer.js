import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contact">
          Contact me :{" "}
          <a href=" mailto:   Fare_TC@hotmail.com" className="animated-link">
            {" "}
            Fare_TC@hotmail.com
          </a>
          <div>© All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
