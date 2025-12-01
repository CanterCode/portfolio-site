import { projects } from "../components/projects";

function Projects() {
  const highlights = projects.filter((project) => project.isHighlight);
  const allProjects = projects.filter((project) => !project.isHighlight);

  return (
    <section className="py-5 text-dark">
      <div className="container">
        <h2 className="text-center mb-5 display-5">
          <strong>Featured Products</strong>
        </h2>

        <div className="row mb-5">
          {highlights.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <a
                    className="btn btn-outline-primary mt-auto"
                    href={project.link}
                    target="_blank"
                  >
                    View Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mb-4">Other Projects</h3>
        <div className="row">
          <div className="col-12">
            {allProjects.length > 0 ? (
              <ul className="list-group">
                {allProjects.map((project) => (
                  <li className="list-group-item" key={project.id}>
                    <strong>{project.title}</strong>: {project.description}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <div className="alert alert-secondary" role="alert">
                  🚧 Still building out this section — check back soon!
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
