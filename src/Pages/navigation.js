import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="slidebar">
      <div className="logo-details">
        <i className="bx bx-list-plus" />
        <span className="logo_name">HEART FAILURE </span>
      </div>
      <ul className="nav-link">
        <li>
          <NavLink to="/overview" exact>
            <i className="bx bx-grid-alt" />
            <span className="link_name">Over View</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-button" to="/main" exact>
            <i className="bx bx-qr-scan" />
            <span className="link_name">Death Event</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
