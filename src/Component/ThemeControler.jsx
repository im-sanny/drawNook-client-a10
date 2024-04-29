import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const ThemeControler = () => {
  const [theme, setTheme] = useState(null);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={handleTheme}>
      {theme === "dark" ? <FiSun size={30} /> : <FaMoon size={30} />}
    </button>
  );
};

export default ThemeControler;

