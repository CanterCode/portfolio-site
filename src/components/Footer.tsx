import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center py-3 mt-auto">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} Joshua Canterbury's Professional Portfolio Website. Like what you see? <Link to="/contact" className="d-inline">Contact Me!</Link></small>
      </div>
    </footer>
  );
};

export default Footer;