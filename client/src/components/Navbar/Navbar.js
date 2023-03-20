import React from "react";
import logo from "../../assets/png/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="logonav">
          <img className="logo" src={logo} alt="logo" width={300} />
        </div>

        <hr />
      </nav>
    </div>
  );
};

export default Navbar;
