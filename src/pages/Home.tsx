import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      {/* Header and Image */}
      <div className="row align-items-center">
        <div className="col-md-6 mt-5">
          <div>
            <h4>Hello, my name is</h4>
            <h1>Joshua Canterbury</h1>
            <p>
              I’m a software engineer and passionate web developer who crafts clean, engaging, and responsive websites and web applications. By blending thoughtful design with modern development, I create user interfaces and experiences that feel intuitive and effortless.
            </p>
          </div>
          <div className="d-flex gap-5 mt-3">
            {/* Technical overview */}
            <p style={{ flex: 1.5 }}>
              My core strength is front-end development with React, TypeScript,
              and modern UI libraries—but I also work across the stack with
              Node.js and Firebase. Most importantly, I’m always learning and expanding
              my skills to deliver full, production-ready solutions.
            </p>

            {/* Skill list + link */}
            <p style={{ flex: 1 }}>
              Key skills:
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Firebase</li>
              </ul>
              <br />
              <Link to="/about" style={{ textDecoration: "underline" }}>
                See the full toolbox →
              </Link>
            </p>
          </div>
        </div>

        <div className="col-md-6 align-items-center d-flex justify-content-center mt-5">
          <img
            className="headshot rounded-circle w-75"
            src="images/headshot.jpg"
          />
        </div>
      </div>

      {/* Learn More and Buttons */}
      <div className="row mt-5">
        <div className="col-md-12 align-items-center d-flex justify-content-center">
          <h2>Learn More About Me!</h2>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <a className="btn btn-primary me-3" href="/about">
            Bio and Resume
          </a>
          <a className="btn btn-primary me-3" href="/projects">
            Projects
          </a>
          <a className="btn btn-primary me-3" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
