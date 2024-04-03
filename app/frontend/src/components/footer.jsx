import "../assets/css/footer.css";

/**
 * Render the footer component.
 *
 * @return {JSX.Element} The rendered footer component
 */
function Footer() {
    return (
        <footer class="footer">
            <small class="footer-text">
                © 2024 Ceco Elijah Maples
                <a
                    href="https://opensource.org/license/MIT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="MIT License"
                >
                    MIT License
                </a>
            </small>
        </footer>
    );
}

export default Footer;