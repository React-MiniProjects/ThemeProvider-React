import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./Content.css";

function Content() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`page ${theme}`}>
      <div className="content-box">
        <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
        <p>
          Experience the power of simplicity — switch between calm light and
          deep dark mode instantly.
        </p>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="toggle-btn"
        >
          <p>Toggle Theme</p>
        </button>
      </div>
    </div>
  );
}

export default Content;
