import "../styles/pages/about.css";

const RESUME_URL = "/Josh-Canterbury-Resume.pdf";

function About() {
  return (
    <section className="about-page page-section" aria-labelledby="about-heading">
      <div className="container">
        <p className="text-center">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="about-resume-link"
          >
            Download Full Resume (PDF) →
          </a>
        </p>

        {/* Hero: Headshot + About Me */}
        <div className="about-hero">
          <div className="about-headshot-wrap">
            <img
              src="/images/headshot.jpg"
              alt="Joshua Canterbury"
              className="headshot about-headshot"
            />
          </div>
          <div className="about-intro">
            <h2 id="about-heading">About Me</h2>
            <p>
              Hi, I'm Josh — oldest of nine, world traveler, bartender turned
              software engineer, devoted husband, and dad. I spent 10 years in
              the service industry and in sales before pivoting to code, and that
              background shapes how I work: I'm personable, clear under pressure,
              and I actually like working with people.
            </p>
          </div>
        </div>

        {/* Two-column: Professional Summary + What Sets Me Apart */}
        <div className="about-two-col">
          <article className="about-block">
            <h3>Professional Summary</h3>
            <p>
              Full-stack software engineer with hands-on experience in
              JavaScript, Python, React, and modern frameworks. I build
              intuitive, scalable web apps and care about clean code and solid
              UX. I've led front-end work on real products and I'm comfortable
              with Git, CI/CD, and agile workflows.
            </p>
          </article>
          <article className="about-block">
            <h3>What Sets Me Apart</h3>
            <p>
              Before I became a software engineer, I spent years in hospitality
              and sales. That gave me strong interpersonal and communication
              skills — I'm outgoing, easy to work with, and I communicate clearly
              with teammates and clients. I adapt quickly and thrive in
              fast-paced environments.
            </p>
            <p className="mb-0">
              I'm still early in my engineering career, but my soft skills are a
              real advantage. I bring the same reliability and collaboration
              you'd expect from a senior teammate, just with fewer years of code
              behind me.
            </p>
          </article>
        </div>

        {/* Skills */}
        <section
          className="about-skills"
          aria-labelledby="skills-heading"
        >
          <h2 id="skills-heading">Skills</h2>
          <div className="about-skills-grid">
            <div className="about-skill-col">
              <h4>Languages</h4>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="about-skill-col">
              <h4>Frameworks & Libraries</h4>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Flask</li>
                <li>Firebase</li>
                <li>Auth0</li>
              </ul>
            </div>
            <div className="about-skill-col">
              <h4>Tools & DevOps</h4>
              <ul>
                <li>Node.js</li>
                <li>GitHub</li>
                <li>RESTful APIs</li>
                <li>VS Code</li>
                <li>Netlify</li>
                <li>Vercel</li>
                <li>CI/CD</li>
                <li>TDD</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className="about-skill-col">
              <h4>Soft Skills</h4>
              <ul>
                <li>Communication</li>
                <li>Team collaboration</li>
                <li>Creative problem-solving</li>
                <li>Time management</li>
                <li>Leadership</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          className="about-experience"
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading">Experience</h2>

          <div className="about-exp-item">
            <h4>Lead Frontend Software Engineer — African Geospace</h4>
            <p className="about-exp-meta">
              Remote · Jul 2025 – Oct 2025 (3-mo internship)
            </p>
            <ul>
              <li>
                Directed front-end development for an aerospace talent platform;
                guided architecture and code quality.
              </li>
              <li>
                Collaborated with the CEO on UI/UX and stakeholder expectations.
              </li>
              <li>
                Mentored developers on Git, code reviews, and React best
                practices.
              </li>
            </ul>
          </div>

          <div className="about-exp-item">
            <h4>Software Engineer Apprentice — Coding Temple</h4>
            <p className="about-exp-meta">Remote · Jan 2025 – Aug 2025</p>
            <ul>
              <li>
                Built dynamic web apps with React, Redux, and Bootstrap; focused
                on responsive UI and reusability.
              </li>
              <li>
                Used Git, GitHub Actions, CI/CD, and test-driven development in
                daily workflow.
              </li>
            </ul>
          </div>

          <div className="about-exp-item">
            <h4>
              Server, Bartender, Lead Trainer — Various restaurants & bars
            </h4>
            <p className="about-exp-meta">
              DFW, Colorado, Latin America · Aug 2016 – Present
            </p>
            <ul>
              <li>
                High-volume service (300+ covers per night) at venues including
                Cheesecake Factory, North Italia, Del Frisco's Grille.
              </li>
              <li>
                Lead Trainer: onboarded and mentored new hires on service and
                hospitality standards.
              </li>
              <li>
                Ran a mobile bar business — private events, logistics, and
                client coordination.
              </li>
            </ul>
          </div>

          <div className="about-exp-item">
            <h4>
              Sales & Project Coordinator — Bench Craft Golf / Power Home
              Remodeling
            </h4>
            <p className="about-exp-meta">Dallas, TX · Jul 2023 – Jan 2025</p>
            <ul>
              <li>
                Managed advertising and renovation projects end-to-end:
                timelines, budgets, client communication.
              </li>
              <li>
                In-home consultations, tailored solutions, and consistent track
                record of exceeding sales targets.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section
          className="about-education"
          aria-labelledby="education-heading"
        >
          <h2 id="education-heading">Education</h2>
          <ul
            className="list-unstyled"
            style={{ maxWidth: "40rem", margin: "0 auto" }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Coding Temple</strong> — Certificate, Software Engineering
              (Frontend Specialized)
            </li>
            <li>
              <strong>Baylor University & Community College</strong> — 2+ years
              undergraduate (Business Management & Computer Science)
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default About;
