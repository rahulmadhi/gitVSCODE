import React from "react";
import { Link } from "react-router-dom";
import Register from "../register/Register";

const Navbar = () => {
  return (
    <div>
      <div>LOGO</div>
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
