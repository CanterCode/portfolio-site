import { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projects, type MediaItem } from '../../components/projects/projects';
import './Projects.css';

function ProjectCarousel({ media }: { media: MediaItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  if (!media || media.length === 0) return null;

  return (
    <div className="relative w-full rounded-lg overflow-hidden group border border-border bg-bg-elevated shadow-sm">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {media.map((item, idx) => (
            <div
              className="embla__slide relative flex items-center justify-center p-0"
              style={{ aspectRatio: '16/9' }}
              key={idx}
            >
              {item.type === 'video' && (
                <video
                  src={item.url}
                  className="w-full h-full object-contain bg-black/5"
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                >
                  Your browser does not support HTML video.
                </video>
              )}
              {item.type === 'loom' && (
                <iframe
                  src={item.url}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full object-cover"
                ></iframe>
              )}
              {item.type === 'image' && (
                <img
                  src={item.url}
                  alt={`Project media ${idx}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {media.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-elevated border-2 border-primary text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 z-10 cursor-pointer shadow-md shadow-card hover:bg-primary/10"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-elevated border-2 border-primary text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 z-10 cursor-pointer shadow-md shadow-card hover:bg-primary/10"
            onClick={scrollNext}
            aria-label="Next image"
          >
            →
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {media.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {media.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors border border-primary cursor-pointer shadow-sm ${idx === selectedIndex ? 'bg-primary' : 'bg-bg-elevated/80'}`}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Projects() {
  const featuredProjects = projects.filter((project) => project.isFeatured);
  const otherProjects = projects.filter((project) => !project.isFeatured);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      className="projects-page page-section py-16 md:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 id="projects-heading" className="text-center mb-16">
          Featured Projects
        </h1>

        <div className="flex flex-col gap-y-16" role="list">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card flex flex-col lg:flex-row gap-8 lg:gap-12"
              role="listitem"
            >
              {/* Media Column (Left) */}
              <div className="w-full lg:w-[55%] shrink-0 flex flex-col justify-center">
                <ProjectCarousel media={project.media || []} />
              </div>

              {/* Content Column (Right - Scrolling natively) */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center content-column">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-role">{project.role}</p>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}

                {project.stack && project.stack.length > 0 && (
                  <div className="project-stack flex flex-wrap gap-2 mt-4 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <p className="project-description text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  {project.githubUrl === 'PRIVATE' ? (
                    <span
                      className="btn outline-none border-dashed border-2 opacity-70"
                      aria-disabled="true"
                    >
                      Proprietary / Private Repo
                    </span>
                  ) : project.githubUrl ? (
                    <a
                      className="btn btn-outline-primary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  ) : null}
                  {project.link && (
                    <a
                      className="btn btn-outline-primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div className="mt-32">
            <h2 className="text-center mb-6">Other Projects</h2>
            <p className="text-center text-text-muted max-w-5xl mx-auto mb-16 text-lg leading-relaxed">
              A collection of specialized tools, mobile experiments, and current builds. This
              section highlights specific technical skills and explorations—from algorithmic data
              parsing to mobile UI design—demonstrating my range across different technologies and
              problem-solving styles.
            </p>

            <div className="flex flex-col gap-6" role="list">
              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className="other-project-card flex flex-col sm:flex-row p-6 bg-bg-elevated rounded-lg gap-6 items-center border border-border"
                  role="listitem"
                >
                  {/* Left Side: Media placeholder */}
                  {project.media && project.media.length > 0 ? (
                    <div
                      className="w-full sm:w-72 flex-shrink-0 rounded-md overflow-hidden bg-black/5 flex items-center justify-center relative border border-border/70 cursor-pointer group"
                      style={{ aspectRatio: '16/10' }}
                      onClick={() => {
                        if (project.media![0].type === 'image') {
                          setSelectedImage(project.media![0].url);
                        }
                      }}
                    >
                      {project.media[0].type === 'video' && (
                        <video src={project.media[0].url} className="w-full h-full object-cover" />
                      )}
                      {project.media[0].type === 'image' && (
                        <>
                          <img
                            src={project.media[0].url}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-white bg-black/70 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-sm">
                              Click to Expand
                            </span>
                          </div>
                        </>
                      )}
                      {project.media[0].type === 'loom' && (
                        <iframe
                          src={project.media[0].url}
                          frameBorder="0"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        ></iframe>
                      )}
                    </div>
                  ) : (
                    <div
                      className="w-full sm:w-72 flex-shrink-0 rounded-md bg-black/5 border border-border/70 flex items-center justify-center"
                      style={{ aspectRatio: '16/10' }}
                    >
                      <span className="text-text-muted/50 text-xs">No Image</span>
                    </div>
                  )}

                  {/* Right Side: Content */}
                  <div className="flex flex-col flex-grow w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                        <p className="text-primary font-medium text-sm">{project.role}</p>
                      </div>

                      {/* GitHub / Site Links on the right side of header */}
                      <div className="flex gap-3 mt-2 sm:mt-0">
                        {project.githubUrl === 'PRIVATE' ? (
                          <span
                            className="text-xs opacity-70 border border-dashed border-border px-2 py-1 rounded"
                            aria-disabled="true"
                          >
                            Private Repo
                          </span>
                        ) : project.githubUrl ? (
                          <a
                            className="text-primary hover:underline text-sm font-medium"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub →
                          </a>
                        ) : null}
                        {project.link && (
                          <a
                            className="text-primary hover:underline text-sm font-medium"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Site →
                          </a>
                        )}
                      </div>
                    </div>

                    {project.stack && project.stack.length > 0 && (
                      <div className="tech-stack-container flex flex-wrap gap-2 mb-3">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-text-muted opacity-80 tech-badge-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-text-muted text-sm leading-relaxed max-w-4xl">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white bg-black/50 hover:bg-black/80 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close full view"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
