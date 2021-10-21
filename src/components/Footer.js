import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <h4>Github Profile Search Engine &copy;</h4>
        <div className="footerContainer">
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/">License</Link>
          </div>
          <div>
            <Link to="/">
              Terms <span style={{ background: "#2b00d4" }}>and Condition</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
