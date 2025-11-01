import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check saved theme in browser
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    // Apply theme class
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Save theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
