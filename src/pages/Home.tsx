import "../css/homepage.css";
import { Icon } from "@iconify/react";

import "../css/skillIcons.css";

const skills = [
  { slug: "react", label: "React", color: "#61DAFB" },
  { slug: "nextdotjs", label: "Next.js", color: "#000000" },
  { slug: "typescript", label: "TypeScript", color: "#3178C6" },
  { slug: "javascript", label: "JavaScript", color: "#F7DF1E" },
  { slug: "html5", label: "HTML5", color: "#E34F26" },
  { slug: "css3", label: "CSS3", color: "#1572B6" },
  { slug: "github", label: "GitHub", color: "#181717" },
  { slug: "openai", label: "ChatGPT", color: "#412991" },
  { slug: "firebase", label: "Firebase", color: "#FFCA28" },
  { slug: "redux", label: "Redux Toolkit", color: "#764ABC" },
  { slug: "bootstrap", label: "Bootstrap", color: "#7952B3" },
  { slug: "tailwindcss", label: "Tailwind CSS", color: "#38B2AC" },
];

function Home() {
  return (
    <div className="container mt-5">
      {/* Header and Image */}
      <div className="row align-items-center">
        <div className="col-md-6 mt-5">
          <div>
            <h4>Howdy! My name is</h4>
            <h1>Joshua Canterbury</h1>
            <p>
              I’m a software engineer and passionate web developer who crafts
              clean, engaging, and responsive websites and web applications. By
              blending thoughtful design with modern development, I create user
              interfaces and experiences that feel intuitive and effortless.
            </p>
          </div>
          <div className="gap-5 mt-3 text-muted home-info">
            {/* Technical overview */}
            <p style={{ flex: 1.5 }} className="info-par">
              My core strength is front-end development but I also work across
              the stack with Node.js and Firebase. Most importantly, I’m always
              learning and expanding my skills to deliver full, production-ready
              solutions.
            </p>

            {/* Skill list */}
            <div className="container py-3">
              <div className="row justify-content-center">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="col-4 col-sm-3 col-md-2 text-center mb-4"
                  >
                    <Icon
                      icon={`simple-icons:${skill.slug}`}
                      style={{ color: skill.color, fontSize: "3rem" }}
                      className="glow-icon"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <a className="btn btn-primary me-3" href="/about">
                  Get to Know Me
                </a>
                <a className="btn btn-primary me-3" href="/projects">
                  See My Work
                </a>
                <a className="btn btn-primary me-3" href="/contact">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 align-items-center d-flex justify-content-center mt-5">
          <img
            className="headshot rounded-circle w-75"
            src="images/headshot.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
