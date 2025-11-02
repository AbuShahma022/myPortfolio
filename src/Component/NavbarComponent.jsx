import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import useTheme from "../Component/hooks/useTheme";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-sky-500 dark:text-sky-400 tracking-tight"
        >
          S.dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-sky-500 dark:hover:text-sky-400 ${
                    isActive ? "text-sky-500 dark:text-sky-400" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

         

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200/20 dark:border-slate-700/20">
          <ul className="flex flex-col p-4 gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500 dark:hover:text-sky-400 transition"
              >
                {link.name}
              </NavLink>
            ))}

           

            <button
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              className="p-2 w-fit rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
