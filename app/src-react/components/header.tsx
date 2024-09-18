import { useState, useEffect } from "react";
import "../assets/css/header.css";
import GitHub from "../assets/svgs/github.svg?react";
import Sun from "../assets/svgs/sun.svg?react";
import Moon from "../assets/svgs/moon.svg?react";

const Header: React.FC = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [latestVersion, setLatestVersion] = useState("");

  const toggleTheme = () => {
    const newTheme = !isLightTheme;
    setIsLightTheme(newTheme);
    const theme = newTheme ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsLightTheme(!prefersDarkMode);
    const theme = prefersDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/cecoeco/Readability.jl/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestVersion(data.tag_name);
      })
      .catch((error) => {
        console.error("Error fetching the latest version:", error);
      });
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="header-title-container">
        <a
          href="https://github.com/cecoeco/Readability.jl"
          className="header-link"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="header-title" title="Readability.jl">
            Readability.jl
          </h1>
        </a>
        <a
          href={`https://github.com/cecoeco/Readability.jl/releases/tag/${latestVersion}`}
          className="header-link"
          target="_blank"
          rel="noreferrer"
        >
          <small className="header-subtitle" title="Software Version">
            {latestVersion}
          </small>
        </a>
      </div>
      <nav>
        <a
          title="GitHub"
          href="https://github.com/cecoeco/Readability.jl"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <GitHub className="github-icon" />
        </a>
        <button
          className="theme-button"
          onClick={toggleTheme}
          title="Toggle theme"
          role="switch"
          aria-label="Toggle theme"
        >
          {isLightTheme ? (
            <Sun className="theme-button-icon" />
          ) : (
            <Moon className="theme-button-icon" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
