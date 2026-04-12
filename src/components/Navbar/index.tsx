import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setTheme, themeLabels, type ThemeId } from '../../store/themeSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.current);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: ThemeId[] = ['seniorEngineer', 'ruleBreaker', 'paperJournal', 'hacker'];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 text-text font-medium rounded-lg transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 ${
      isActive ? 'text-primary bg-primary/10' : ''
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-6 py-4 text-text text-lg font-medium rounded-xl transition-all duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 ${
      isActive ? 'text-primary bg-primary/10 shadow-sm' : 'hover:bg-primary/5 hover:text-primary'
    }`;

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-bg-overlay/80 backdrop-blur-md border-b border-border py-4 px-6 md:px-12 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full flex items-center justify-between flex-wrap gap-4 relative">
        {/* Brand - Left */}
        <Link
          className="text-text font-bold text-2xl no-underline transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
          to="/"
          aria-label="Joshua Canterbury - Home"
        >
          Joshua Canterbury{' '}
          <span className="font-normal text-[0.65em] opacity-85 hidden sm:inline">
            • Software Engineer
          </span>
        </Link>

        {/* Theme Toggle - Center */}
        <div
          className="relative flex-none md:absolute md:left-1/2 md:-translate-x-1/2"
          ref={dropdownRef}
          role="group"
          aria-label="UI Design Mode"
        >
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-bg-elevated border border-border rounded-lg text-text font-medium text-sm transition-all hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
            aria-label={`Current theme: ${themeLabels[currentTheme]}. Change UI design theme`}
            id="theme-toggle"
            aria-controls="theme-dropdown"
          >
            <span>Change Design</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <ul
              id="theme-dropdown"
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-[12rem] bg-bg-elevated border border-border rounded-lg shadow-lg p-2 z-[1001] list-none"
              role="listbox"
              aria-labelledby="theme-toggle"
              onKeyDown={(e) => {
                if (e.key === 'Escape') setDropdownOpen(false);
              }}
            >
              {themes.map((themeId) => (
                <li key={themeId}>
                  <button
                    type="button"
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:-outline-offset-2 cursor-pointer ${
                      currentTheme === themeId
                        ? 'bg-primary text-bg'
                        : 'text-text hover:bg-primary/10'
                    }`}
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
        <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden relative p-2.5 w-11 h-11 bg-transparent border rounded-lg text-text flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus ${
            mobileOpen ? 'border-primary text-primary bg-primary/5' : 'border-border hover:bg-primary/5'
          }`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="navbarNav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="flex flex-col justify-center items-center w-5 h-5 relative">
            <span
              className={`absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${
                mobileOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${
                mobileOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
        id="navbarNav"
      >
        <div className="bg-bg-elevated/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl mx-auto ring-1 ring-border/30">
          <ul className="flex flex-col gap-2 m-0 p-4 list-none">
            <li>
              <NavLink
                to="/about"
                className={mobileNavLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={mobileNavLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={mobileNavLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
