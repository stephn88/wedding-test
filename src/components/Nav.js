import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/planner">
          <li>Planner</li>
        </Link>
        <Link to="/giftlist">
          <li>Gift List</li>
        </Link>
        <Link to="/relaxation">
          <li>Relaxation</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
