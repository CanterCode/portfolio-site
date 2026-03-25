import { projects } from "../../components/projects";
import "./Projects.css";

function Projects() {
  const highlights = projects.filter((project) => project.isHighlight);
  const allProjects = projects.filter((project) => !project.isHighlight);

  return (
    <section
      className="projects-page page-section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <h2 id="projects-heading">Featured Products</h2>

        <div className="projects-grid" role="list">
          {highlights.map((project) => (
            <article
              key={project.id}
              className="project-card"
              role="listitem"
            >
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              {project.link ? (
                <a
                  className="btn btn-outline-primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site
                </a>
              ) : (
                <span className="btn btn-outline-primary" aria-disabled="true">
                  Coming Soon
                </span>
              )}
            </article>
          ))}
        </div>

        <h3>Other Projects</h3>
        {allProjects.length > 0 ? (
          <ul className="projects-list">
            {allProjects.map((project) => (
              <li key={project.id}>
                <strong>{project.title}</strong>: {project.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="projects-empty">
            Still building out this section — check back soon!
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
