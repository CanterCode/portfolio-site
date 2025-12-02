import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Brand / Logo */}
        <Link className="navbar-brand ms-3 fw-bold" to="/">
          Joshua Canterbury <span className="brand-highlight">• Software Engineer</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse me-4" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Con
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
