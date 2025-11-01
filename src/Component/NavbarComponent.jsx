import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../Component/hooks/useTheme";
import { Link } from "react-router-dom";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-semibold text-sky-500 dark:text-sky-400 tracking-tight"
        >
          S.dev
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-sky-500 dark:hover:text-sky-400 transition">
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/about" className="hover:text-sky-500 dark:hover:text-sky-400 transition">
              About
            </Link>
          </li>

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
