import React from "react";

export default function Header() {
  return (
    <nav style={{ zIndex: "1" }}>
      <div className="slidebar-button">
        <i className="bx bx-menu slidebarBtn" />
        <span style={{ color: "burlywood" }} className="dashboard">
          {" "}
          Decision tree for heart failure
        </span>
        <i class="bx bx-heart"></i>
      </div>

      <div className="profile-details">
        <span className="admin_name"> Data Mining </span>
      </div>
    </nav>
  );
}
