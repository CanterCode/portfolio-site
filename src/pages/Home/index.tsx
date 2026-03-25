import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Home.css";

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
    <section className="home-page" aria-labelledby="home-heading">
      <div className="container">
        <div className="home-hero">
          <div className="home-intro">
            <h4>Howdy! My name is</h4>
            <h1 id="home-heading">Joshua Canterbury</h1>
            <p>
              I'm a software engineer and passionate web developer who crafts
              clean, engaging, and responsive websites and web applications. By
              blending thoughtful design with modern development, I create user
              interfaces and experiences that feel intuitive and effortless.
            </p>

            <div className="home-info">
              <p className="info-par">
                My core strength is front-end development, but I also work across
                the stack with Node.js and Firebase. Most importantly, I'm
                always learning and expanding my skills to deliver full,
                production-ready solutions.
              </p>

              <div className="home-skills" role="list" aria-label="Technologies">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="home-skill-icon"
                    role="listitem"
                    tabIndex={0}
                  >
                    <Icon
                      icon={`simple-icons:${skill.slug}`}
                      style={{ color: skill.color, fontSize: "3rem" }}
                      aria-label={skill.label}
                    />
                  </div>
                ))}
              </div>

              <div className="home-cta">
                <Link className="btn btn-primary" to="/about">
                  Get to Know Me
                </Link>
                <Link className="btn btn-primary" to="/projects">
                  See My Work
                </Link>
                <Link className="btn btn-primary" to="/contact">
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>

          <div className="home-headshot-wrap">
            <img
              src="/images/headshot.jpg"
              alt="Joshua Canterbury"
              className="headshot home-headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
