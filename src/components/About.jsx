import { profile, skills, uiText } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-index">{uiText.about.index}</span>
          <h2 className="section-title">{uiText.about.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-bio">{profile.aboutBio}</p>

            <dl className="about-meta-list">
              <div className="about-meta-item about-meta-item--full">
                <dt className="about-meta-label">{uiText.about.educationHeading}</dt>
                <dd className="about-meta-value">
                  <span className="about-university">{profile.university}</span>
                  <span className="about-major">{profile.major}</span>
                </dd>
              </div>

              <div className="about-meta-item">
                <dt className="about-meta-label">{uiText.about.birthLabel}</dt>
                <dd className="about-meta-value about-meta-mono">{profile.birthDate}</dd>
              </div>

              <div className="about-meta-item">
                <dt className="about-meta-label">{uiText.about.locationLabel}</dt>
                <dd className="about-meta-value">{profile.location}</dd>
              </div>
            </dl>
          </div>

          <aside className="about-skills-card">
            <h3 className="about-skills-heading">{uiText.about.skillsHeading}</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill} className="skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
