import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto py-4 px-6 w-full text-center text-text-muted text-sm border-t border-border bg-bg-overlay" role="contentinfo">
      <div className="w-full max-w-7xl mx-auto">
        <small>
          &copy; {new Date().getFullYear()} Joshua Canterbury's Professional
          Portfolio. Like what you see?{" "}
          <Link
            to="/contact"
            className="text-primary font-bold underline decoration-2 underline-offset-2 hover:text-primary-hover transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
          >
            Contact Me
          </Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;