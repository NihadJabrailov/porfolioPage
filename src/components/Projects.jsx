import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Info, Star } from 'lucide-react';
import { fallbackStarredProjects, githubConfig, uiText } from '../data/portfolioData';
import './Projects.css';

function readCachedRepos() {
  try {
    const raw = localStorage.getItem(githubConfig.cacheKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.timestamp === 'number' &&
      Array.isArray(parsed.data) &&
      Date.now() - parsed.timestamp < githubConfig.cacheTtlMs
    ) {
      return parsed.data;
    }
  } catch {
    // Ignore storage/parse errors and fall back to network fetch.
  }
  return null;
}

function writeCachedRepos(data) {
  try {
    localStorage.setItem(
      githubConfig.cacheKey,
      JSON.stringify({ timestamp: Date.now(), data }),
    );
  } catch {
    // Ignore storage quota or private-mode errors.
  }
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    const cached = readCachedRepos();
    if (cached) {
      setRepos(cached);
      setLoading(false);
      return undefined;
    }

    const controller = new AbortController();

    async function fetchStarredRepos() {
      try {
        const response = await fetch(githubConfig.starredEndpoint, {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Unexpected GitHub API payload');
        }

        writeCachedRepos(data);
        setRepos(data);
        setIsFallback(false);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setRepos(fallbackStarredProjects);
        setIsFallback(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchStarredRepos();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section id="projects" className="section section-alt projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-kicker">{uiText.projects.kicker}</span>
          <h2 className="section-title">{uiText.projects.title}</h2>
          <p className="section-subtitle">{uiText.projects.subtitle}</p>
        </motion.div>

        {isFallback && (
          <div className="projects-notice" role="status">
            <Info size={16} className="projects-notice-icon" aria-hidden="true" />
            <span>{uiText.projects.fallbackNotice}</span>
          </div>
        )}

        {loading && (
          <div className="projects-state" role="status" aria-live="polite">
            <div className="projects-skeleton-grid">
              {[1, 2].map((item) => (
                <div key={item} className="project-skeleton-card" aria-hidden="true" />
              ))}
            </div>
            <p className="projects-state-text">{uiText.projects.loadingText}</p>
          </div>
        )}

        {!loading && repos.length === 0 && (
          <div className="projects-empty">
            <p className="projects-state-text">{uiText.projects.emptyText}</p>
          </div>
        )}

        {!loading && repos.length > 0 && (
          <div className="projects-grid">
            {repos.map((repo, index) => {
              const demoUrl = typeof repo.homepage === 'string' ? repo.homepage.trim() : '';

              return (
                <motion.article
                  key={repo.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
                >
                  <div className="project-card-top">
                    <div className="project-card-meta">
                      {repo.language ? (
                        <span className="project-language-badge">{repo.language}</span>
                      ) : (
                        <span className="project-language-badge project-language-badge--muted">
                          Repo
                        </span>
                      )}

                      <span
                        className="project-stars"
                        aria-label={`${repo.stargazers_count ?? 0} ${uiText.projects.starsLabel}`}
                      >
                        <Star size={14} className="project-star-icon" aria-hidden="true" />
                        <span className="mono">{repo.stargazers_count ?? 0}</span>
                      </span>
                    </div>

                    <h3 className="project-title">{repo.name}</h3>
                    <p className="project-description">
                      {repo.description || uiText.projects.noDescription}
                    </p>
                  </div>

                  <div className="project-links">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Code2 size={15} aria-hidden="true" />
                      <span>{uiText.projects.githubLabel}</span>
                    </a>

                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--primary"
                      >
                        <span>{uiText.projects.demoLabel}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
