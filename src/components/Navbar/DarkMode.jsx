import React, { useEffect, useState } from "react";
import lightButton from "../../assets/light.png";
import darkButton from "../../assets/dark.png";

function DarkMode() {
  const [theme, setTheme] = useState("light");
  const e = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      e.classList.add("dark");
    } else {
      e.classList.remove("dark");
    }
  }, [theme]);

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        src={lightButton}
        alt="Light Mode"
        onClick={handleClick}
        className={`w-32 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute -right-3 top-[2.4%] ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark Mode Button */}
      <img
        src={darkButton}
        alt="Dark Mode"
        onClick={handleClick}
        className={`w-32 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

export default DarkMode;
