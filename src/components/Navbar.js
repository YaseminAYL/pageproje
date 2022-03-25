import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i class="fa-solid fa-graduation-cap fa-xl"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/candidates">
              Candidates
            </NavLink>
            <NavLink className="nav-link" to="/aboutus">
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
