import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <h2>
      <nav className="nav justify-content-center">
        <Link className="nav-link" to="/home">
          Home
        </Link>{" "}
        <Link className="nav-link" to="/movieslist">
          Movies List
        </Link>
        {"    "}
        <Link className="nav-link" to="/about">
          About
        </Link>
        {"    "}
      </nav>
    </h2>
  );
}

export default Navbar;
