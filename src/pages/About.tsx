function About() {
  return (
    <section className="py-5 bg-light text-dark">
      <div className="container">
        {/* About Me with collage side-by-side */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="mb-4 display-5">About Me</h2>
            <p>
              Hi, I’m Josh — oldest of nine siblings, world traveler, bartender
              turned software engineer, devouted husband, and soon-to-be dad. My journey thus far has
              taught me resilience and adaptability, qualities that I bring into
              every project.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            {/* Placeholder for your interactive collage */}
            <div
              className="border rounded"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "250px",
                backgroundColor: "#e9ecef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6c757d",
                fontStyle: "italic",
                fontSize: "1.2rem",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              Interactive Collage Placeholder
              <br />
              (Travel, Family, Adventures...)
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <h2 className="text-center mb-4 display-5">Professional Summary</h2>
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8">
            <p>
              I’m a front-end software engineer with experience leading teams
              through tech residencies and building responsive, user-focused web
              apps. Skilled in React, Redux, TypeScript, and agile workflows,
              I’m passionate about delivering clean, maintainable code and
              collaborating effectively.
            </p>
          </div>
        </div>

        {/* Skills */}
        <h2 className="text-center mb-4 display-5">Skills</h2>
        <div className="row mb-5">
          <div className="col-md-3">
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Frameworks & Libraries</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Firebase</li>
              <li>Auth0</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Tools & DevOps</h4>
            <ul>
              <li>AI Tools</li>
              <li>GitHub</li>
              <li>RESTful APIs</li>
              <li>VS Code</li>
              <li>Vercel</li>
              <li>CI/CD</li>
              <li>TDD</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Soft Skills</h4>
            <ul>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Creative Problem-Solving</li>
              <li>Time Management</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>

        {/* Relevant Work Experience */}
        <h2 className="text-center mb-4 display-5">Relevant Work Experience</h2>
        <div className="mb-5">
          <h4>
            African Geospace — Lead Front End Software Engineer{" "}
            <small className="text-muted">July 2025 - Present | Remote</small>
          </h4>
          <ul>
            <li>
              Led front-end development for an aerospace talent platform during
              an eight-week tech residency, guiding the team through planning,
              execution, and delivery.
            </li>
            <li>
              Streamlined UX/UI design from wireframes to implementation,
              creating responsive, accessible, and modern interfaces aligned
              with user needs and stakeholder expectations.
            </li>
            <li>
              Presented technical demos and progress updates to stakeholders,
              translating complex development milestones into clear,
              goal-oriented outcomes.
            </li>
            <li>
              Built scalable front-end architecture using React, Redux Toolkit,
              TypeScript, and Bootstrap, following best practices and agile
              methodologies.
            </li>
            <li>
              Fostered team productivity through code reviews, Git workflow
              standards, and clear task delegation—ensuring high-quality output
              and timely delivery.
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h4>
            Coding Temple — Software Engineer Apprenticeship{" "}
            <small className="text-muted">Jan 2025 - Present | Remote</small>
          </h4>
          <ul>
            <li>
              Developed dynamic web applications with focus on front-end
              architecture and responsive UI.
            </li>
            <li>
              Adapted to new technologies under tight deadlines, applying
              knowledge effectively.
            </li>
            <li>
              Built components using React, Redux, and Bootstrap following best
              practices.
            </li>
            <li>
              Implemented Git version control, CI/CD workflows, and test-driven
              development (TDD).
            </li>
            <li>
              Collaborated in agile teams, participating in code reviews and
              sprint planning.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
