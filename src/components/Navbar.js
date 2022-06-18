import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-home" to="/login">
        Login
      </Link>
      <Link className="nav-list" to="/product">
        Product
      </Link>
      <img src="https://cdn-icons.flaticon.com/png/128/649/premium/649931.png?token=exp=1655553235~hmac=de2bf96760894e4d80bc220495f3cb53"></img>
    </div>
  );
};
