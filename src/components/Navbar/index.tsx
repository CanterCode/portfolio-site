import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setTheme, themeLabels, type ThemeId } from "../../store/themeSlice";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.current);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: ThemeId[] = [
    "minimalistic",
    "neoBrutalism",
    "retro",
    "dark",
    "flat",
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="site-navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        {/* Brand - Left */}
        <Link
          className="navbar-brand"
          to="/"
          aria-label="Joshua Canterbury - Home"
        >
          Joshua Canterbury{" "}
          <span className="brand-highlight">• Software Engineer</span>
        </Link>

        {/* Theme Toggle - Center */}
        <div
          className="theme-toggle-wrapper"
          ref={dropdownRef}
          role="group"
          aria-label="UI Design Mode"
        >
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
            aria-label={`Current theme: ${themeLabels[currentTheme]}. Change UI design theme`}
            id="theme-toggle"
            aria-controls="theme-dropdown"
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              ◆
            </span>
            <span>UI Theme</span>
          </button>
          {dropdownOpen && (
            <ul
              id="theme-dropdown"
              className="theme-dropdown"
              role="listbox"
              aria-labelledby="theme-toggle"
              onKeyDown={(e) => {
                if (e.key === "Escape") setDropdownOpen(false);
              }}
            >
              {themes.map((themeId) => (
                <li key={themeId}>
                  <button
                    type="button"
                    className={`theme-option ${currentTheme === themeId ? "active" : ""}`}
                    onClick={() => {
                      dispatch(setTheme(themeId));
                      setDropdownOpen(false);
                    }}
                    role="option"
                    aria-selected={currentTheme === themeId}
                  >
                    {themeLabels[themeId]}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Nav Links - Right */}
        <ul className="navbar-nav">
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
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="navbarNav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="toggler-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div
        className={`navbar-collapse ${mobileOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav mobile-nav">
          <li>
            <NavLink to="/about" className="nav-link" onClick={() => setMobileOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link" onClick={() => setMobileOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
