import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/" className="logo">
        <i className="fab fa-github github"></i> Github Search
      </Link>
      <ul className="navigation">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Hey there! Start your search now..." />
        <i className="fas fa-search"></i>
      </div>
    </header>
  );
}

export default NavBar;
