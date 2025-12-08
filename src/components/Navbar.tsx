// components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Antoni’s Journey
        </Link>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={isActive("/")}
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={isActive("/about")}
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={isActive("/contact")}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/proff"
              className={isActive("/proff")}
              onClick={() => setIsOpen(false)}
            >
              Career Journey
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
