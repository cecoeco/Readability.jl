import "../assets/css/header.css";

import { createSignal, createEffect } from "solid-js";
import { A } from "@solidjs/router";
import Sun from "../assets/svg/sun.svg";
import Moon from "../assets/svg/moon.svg";

/**
 * Create a link component with the given properties.
 *
 * @param {object} props - The properties for the link component
 * @return {JSX.Element} The link component
 */
const Link = (props) => (
    <A
        class="nav-link"
        href={props.href}
        title={props.title}
        activeClass="nav-link-active"
        end
    >
        {props.children}
    </A>
);

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
            <nav>
                <a
                    title="Readability.jl"
                    href="https://github.com/cecoeco/Readability.jl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Readability.jl
                </a>
                <Link title="Home page" href="/">Home</Link>
                <Link title="Upload paper page" href="/upload-paper">Upload paper</Link>
            </nav>
            <button class="theme-button" onClick={toggleTheme} title="Toggle theme">
                {isLightTheme() ? <Sun /> : <Moon />}
            </button>
        </header>
    );
}

export default Header;
