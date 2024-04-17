import { createSignal, createEffect } from "solid-js";
import "../assets/css/header.css";
import Sun from "../assets/svg/sun.svg";
import Moon from "../assets/svg/moon.svg";

/**
 * Renders the header component with a toggle theme button.
 *
 * @return {JSX.Element} The header component JSX
 */
function Header() {
    const [isLightTheme, setIsLightTheme] = createSignal(true);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme());
        const theme = isLightTheme() ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
    };

    createEffect(() => {
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setIsLightTheme(!prefersDarkMode);
        const theme = prefersDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    });

    return (
        <header>
            <a href="https://github.com/cecoeco/Readability.jl" target="_blank">Readability.jl</a>
            <button class="theme-button" onClick={toggleTheme} title="Toggle theme">
                {isLightTheme() ? <Sun /> : <Moon />}
            </button>
        </header>
    );
}

export default Header;
