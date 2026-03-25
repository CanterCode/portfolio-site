import { Link } from "react-router-dom";
import "./Resume.css";

const RESUME_URL = "/Josh-Canterbury-Resume.pdf";

function Resume() {
  return (
    <section
      className="resume-page page-section"
      aria-labelledby="resume-heading"
    >
      <div className="container">
        <h2 id="resume-heading" className="sr-only">
          Resume
        </h2>
        <p>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Download Full Resume (PDF) →
          </a>
        </p>
        <p className="resume-note">
          For my background, experience, skills, and education, see my{" "}
          <Link to="/about">About</Link> page.
        </p>
      </div>
    </section>
  );
}

export default Resume;
