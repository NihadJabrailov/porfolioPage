import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects, uiText } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-index">{uiText.projects.index}</span>
          <h2 className="section-title">{uiText.projects.title}</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-top">
                <span className="project-index">{project.index}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-card-bottom">
                <ul className="project-tech-list">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="project-tech-tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Code2 size={15} aria-hidden="true" />
                    <span>{uiText.projects.githubLabel}</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--primary"
                  >
                    <span>{uiText.projects.demoLabel}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
