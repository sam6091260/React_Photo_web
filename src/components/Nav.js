import React from "react";
import { Link } from "react-router-dom";
import shhh from "../image/shhh.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        {" "}
        <img src={shhh} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
