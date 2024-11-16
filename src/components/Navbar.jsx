import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';


const Navbar = () => (
  <nav className="navbar">
    <h1>Time Capsule</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </nav>
);

export default Navbar;
