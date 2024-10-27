import "../assets/css/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Readability.jl Contributors
      <a href="https://opensource.org/license/MIT/" target="_blank">
        MIT License
      </a>
    </footer>
  );
};

export default Footer;
