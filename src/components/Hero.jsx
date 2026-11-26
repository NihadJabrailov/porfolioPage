import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile, socialLinks, uiText } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container hero-layout">
        <div className="hero-top">
          <span className="hero-badge mono">{uiText.hero.badge}</span>
          <h1 className="hero-title">{profile.fullName}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.heroSummary}</p>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="hero-cta-primary">
            <span>{uiText.hero.ctaProjects}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#contact" className="hero-cta-secondary">
            <span>{uiText.hero.ctaContact}</span>
          </a>
        </div>

        <div className="hero-meta-grid">
          <div className="hero-meta-item">
            <span className="hero-meta-label mono">{uiText.hero.educationLabel}</span>
            <span className="hero-meta-value">{profile.education}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label mono">{uiText.hero.birthLabel}</span>
            <span className="hero-meta-value mono">{profile.birthDate}</span>
          </div>
        </div>

        <ul className="hero-socials">
          {socialLinks.map((item) => (
            <li key={item.id}>
              {item.isPlaceholder ? (
                <span className="hero-social-placeholder" aria-disabled="true">
                  <span>{item.label}</span>
                  <span className="hero-social-handle mono">{item.handle}</span>
                </span>
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
