import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  let cart = useSelector((state) => state.cartReducer.cart);
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__brand">
          <span style={{ color: "#f76b14" }}>Chota</span>
          <span style={{ color: "#292821" }}>Bazaar</span>
        </h1>
      </div>
      <div className="navbar__right">
        <div className="navbar__content">
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div className="navbar__content">
          <Link to="/products">
            <span>Products</span>
          </Link>
        </div>
        <div className="navbar__content">
          <Link to="/cart">
            <span>Cart({cart.length !== 0 ? cart.length : 0})</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
