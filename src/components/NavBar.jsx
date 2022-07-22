import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/products">
        <span>Products</span>
      </Link>
      <Link to="/cart-item">
        <span>cart item</span>
      </Link>
      <Link to="/services">
        <span>Services</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
    </div>
  );
};

export default NavBar;
