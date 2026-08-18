import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-logo">
            HRMS
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">
              Sign Up
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/adminpanel" className="navbar-link">
              Admin Panel
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/dashbord" className="navbar-link">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
