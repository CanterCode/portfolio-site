function About() {
  return(
    <section className="py-5 bg-light text-dark">
      <div className="container">

        <h2 className="text-center mb-4 display-5">About Me & Professional Summary</h2>

        <div className="row mb-5">
          <div className="col-md-6">
            <h3 className="h4 mb-3">Personal Summary</h3>
            <p>
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="h4 mb-3">Professional Summary</h3>
            <p>
            </p>
          </div>
        </div>

        <h2 className="text-center mb-4 display-5">Skills & Certifications</h2>

        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h4>Frameworks & Libraries</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Firebase</li>
              <li>Auth0</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
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
        </div>

        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <h4>Soft Skills</h4>
            <ul>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Creative Problem-Solving</li>
              <li>Time Management</li>
              <li>Leadership</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4>Certifications</h4>
            <ul>
              <li>Coding Temple - Front End Specialized Software Engineer</li>
              {/* Add more certifications here if needed */}
            </ul>
          </div>
        </div>

        <h2 className="text-center mb-4 display-5">Work Experience</h2>

        <div className="mb-5">
          <h4>Coding Temple — Software Engineer Apprenticeship <small className="text-muted">Jan 2025 - Present | Remote</small></h4>
          <ul>
            <li>Developed dynamic web applications with focus on front-end architecture and responsive UI.</li>
            <li>Adapted to new technologies under tight deadlines, applying knowledge effectively.</li>
            <li>Built components using React, Redux, and Bootstrap following best practices.</li>
            <li>Implemented Git version control, CI/CD workflows, and test-driven development (TDD).</li>
            <li>Collaborated in agile teams, participating in code reviews and sprint planning.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h4>Various Restaurants & Bars — Server, Bartender, Lead Trainer <small className="text-muted">Aug 2016 - Present | DFW, Colorado, Latin America</small></h4>
          <ul>
            <li>Delivered high-quality service managing 300+ covers per night at venues like Cheesecake Factory, North Italia, and Del Frisco’s Grille.</li>
            <li>Mentored new hires as Lead Trainer, instructing on service standards and hospitality.</li>
            <li>Owned and managed a mobile bar business, demonstrating strong organizational skills.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h4>Bench Craft Golf / Power Home Remodeling — Sales & Project Coordinator <small className="text-muted">Jul 2023 - Jan 2025 | Dallas, TX</small></h4>
          <ul>
            <li>Managed advertising and renovation projects end-to-end, coordinating timelines and budgets.</li>
            <li>Conducted client consultations, presented solutions, and secured new business.</li>
            <li>Consistently exceeded monthly sales targets, contributing to revenue growth.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;