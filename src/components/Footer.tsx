import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <small>
          &copy; {new Date().getFullYear()} Joshua Canterbury's Professional
          Portfolio. Like what you see? <Link to="/contact">Contact Me</Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;