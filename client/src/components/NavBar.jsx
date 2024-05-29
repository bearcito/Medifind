// src/components/NavBar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../styles/NavBar.css"; // Import the CSS file

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="App-header">
      <h1>
        <Icon icon="cil:medical-cross" /> Medicare
      </h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/Find">Find a Doctor</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        {isAuthenticated ? (
          <Link to="#" onClick={logout}>Logout</Link>
        ) : (
          <Link to="/">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
