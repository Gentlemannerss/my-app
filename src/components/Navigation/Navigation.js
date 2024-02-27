import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="outerContainer navigation">
      <div className="innerContainer">
        <ul className="">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav-link" : "default-nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav-link" : "default-nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav-link" : "default-nav-link"
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;