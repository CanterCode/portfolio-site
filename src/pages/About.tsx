function About() {
  return(
    <div>
    <section id="about" className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-4 display-5">💼 About Me</h2>

        <p className="lead mb-4">
          Hey, I’m <strong>Josh Canterbury</strong> — a front-end focused <strong>Software Engineer</strong> passionate about building clean, intuitive, and accessible user experiences.
          I specialize in modern JavaScript frameworks like <strong>React</strong> and have hands-on experience with full-stack development, cloud services, and UI/UX collaboration.
        </p>

        <p className="mb-4">
          My journey into tech started in leadership and hospitality, where I developed strong communication, problem-solving, and people-first instincts.
          Today, I bring those strengths into the world of software engineering — working efficiently under pressure, communicating clearly with teams and clients, and always finding a way forward.
        </p>

        <p className="mb-5">
          I thrive in team-driven environments and love continuously pushing my skills forward — whether through real-world coding challenges,
          ongoing technical courses like Harvard’s <strong>CS50</strong>, or building full-featured applications from the ground up.
        </p>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="h4 mb-3">🧠 Technical Skills</h3>
            <ul className="list-unstyled">
              <li><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3/SCSS, Python (familiar), SQL/NoSQL</li>
              <li><strong>Frameworks & Libraries:</strong> React, Redux Toolkit, Next.js, Node.js, Express, Bootstrap</li>
              <li><strong>APIs & Cloud:</strong> REST APIs, Firebase (Auth, Firestore, Realtime DB), React Query, Axios</li>
              <li><strong>Tools:</strong> Git, GitHub, GitHub Projects, VS Code, Chrome DevTools</li>
              <li><strong>Testing:</strong> Jest, React Testing Library (basic)</li>
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <h3 className="h4 mb-3">🤝 Soft Skills</h3>
            <ul className="list-unstyled">
              <li>Strong communication (verbal & written)</li>
              <li>Leadership & collaboration experience</li>
              <li>Adaptable and quick to learn</li>
              <li>Creative problem-solver</li>
              <li>Client-focused mindset</li>
              <li>Time management & multitasking</li>
              <li>Self-starter with a team-first attitude</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;