import React from "react";
import { Link } from "react-router-dom";
import shhh from "../image/shhh.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/React_Photo_web">
        {" "}
        <img src={shhh} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/React_Photo_web">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
