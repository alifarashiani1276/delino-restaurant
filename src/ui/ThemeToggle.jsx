import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="تغییر حالت روشن/تاریک"
      className="btn-icon"
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}