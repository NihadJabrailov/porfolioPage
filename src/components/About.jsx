import { motion } from 'framer-motion';
import { Calendar, Code2, GraduationCap, MapPin } from 'lucide-react';
import { profile, skills, uiText } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-kicker">{uiText.about.kicker}</span>
          <h2 className="section-title">{uiText.about.title}</h2>
          <p className="section-subtitle">{uiText.about.subtitle}</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-card about-bio-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <p className="about-bio">{profile.aboutBio}</p>

            <div className="about-skills-block">
              <div className="about-block-header">
                <Code2 size={16} className="about-block-icon" aria-hidden="true" />
                <h3 className="about-block-title">{uiText.about.skillsHeading}</h3>
              </div>

              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.aside
            className="about-card about-education-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="about-block-header">
              <GraduationCap size={18} className="about-block-icon" aria-hidden="true" />
              <h3 className="about-block-title">{uiText.about.educationHeading}</h3>
            </div>

            <div className="education-content">
              <p className="education-university">{profile.university}</p>
              <p className="education-major">{profile.major}</p>
            </div>

            <dl className="education-meta">
              <div className="education-meta-row">
                <dt className="education-meta-term">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{uiText.about.birthLabel}:</span>
                </dt>
                <dd className="education-meta-desc mono">{profile.birthDate}</dd>
              </div>

              <div className="education-meta-row">
                <dt className="education-meta-term">
                  <MapPin size={14} aria-hidden="true" />
                  <span>{uiText.about.locationLabel}:</span>
                </dt>
                <dd className="education-meta-desc">{profile.location}</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
