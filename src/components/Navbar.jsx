import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg"; // Ensure you have a close icon

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // State to manage menu visibility

  return (
    <div>
      <div
        className="w-100 py-2 px-3 position-fixed top-0 start-0"
        style={{ zIndex: 1000, overflowX: "hidden", background: "#151030" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo Section */}
          <div>
            <Link
              to="/"
              className="d-flex align-items-center gap-2 text-decoration-none"
              onClick={() => {
                setToggle(false); // Close menu on logo click
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="img-fluid rounded logo-img"
              />
              <p className="text-white fw-bold cursor-pointer m-0 logo-text">
                Aaditya | Joshi
              </p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex gap-4">
            <Link to="/about" className="text-white text-decoration-none">
              <h5>About</h5>
            </Link>
            <Link to="/skills" className="text-white text-decoration-none">
              <h5>Skills</h5>
            </Link>
            <Link to="/projects" className="text-white text-decoration-none">
              <h5>Projects</h5>
            </Link>
            <Link to="/contact" className="text-white text-decoration-none">
              <h5>Contact</h5>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="d-md-none d-flex align-items-center">
            <img
              src={toggle ? close : menu} // Toggle between menu and close icon
              alt="menu"
              className="menu-icon"
              onClick={() => setToggle(!toggle)} // Toggle the state on click
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown (Now appears over the existing navbar) */}
        {toggle && (
          <div
            className="position-fixed p-3 rounded shadow text-center"
            style={{
              background: "linear-gradient(to right, #434343, #000000)",
              zIndex: 9999,
              width: "60%", // Restrict width
              right: "5%", // Positioned properly to be visible
              top: "60px", // Slightly below the navbar
              borderRadius: "10px",
            }}
          >
            <ul className="list-unstyled m-0 p-0">
              <li>
                <Link
                  to="/about"
                  className="text-white text-decoration-none d-block py-2"
                  onClick={() => setToggle(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="text-white text-decoration-none d-block py-2"
                  onClick={() => setToggle(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white text-decoration-none d-block py-2"
                  onClick={() => setToggle(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-decoration-none d-block py-2"
                  onClick={() => setToggle(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div style={{ height: "60px" }} /> {/* Spacer */}
    </div>
  );
};

export default Navbar;
