import { useEffect, useState } from 'react';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { profile, socialLinks, uiText } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profile.email);
      }
      setCopied(true);
    } catch {
      setCopied(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-index">{uiText.contact.index}</span>
            <h2 className="section-title">{uiText.contact.title}</h2>
            <p className="contact-subtitle">{uiText.contact.subtitle}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-col">
              <div className="contact-card">
                <span className="contact-block-label">
                  {uiText.contact.emailLabel}
                </span>
                <div className="contact-email-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="contact-email-link mono"
                  >
                    {profile.email}
                  </a>
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={handleCopyEmail}
                  >
                    {copied ? (
                      <Check size={14} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <Copy size={14} strokeWidth={1.75} aria-hidden="true" />
                    )}
                    <span>
                      {copied
                        ? uiText.contact.copiedButton
                        : uiText.contact.copyButton}
                    </span>
                  </button>
                </div>
              </div>

              <div className="contact-card">
                <span className="contact-block-label">
                  {uiText.contact.socialHeading}
                </span>
                <ul className="contact-social-list">
                  {socialLinks.map((item) => (
                    <li key={item.id} className="contact-social-item">
                      {item.isPlaceholder ? (
                        <div className="contact-social-row is-placeholder">
                          <span className="contact-social-label">
                            {item.label}
                          </span>
                          <span className="contact-social-handle mono">
                            {item.handle}
                          </span>
                        </div>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-social-row"
                        >
                          <span className="contact-social-label">
                            {item.label}
                          </span>
                          <span className="contact-social-meta">
                            <span className="contact-social-handle mono">
                              {item.handle}
                            </span>
                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.75}
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="contact-form-col">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form-heading">
                  {uiText.contact.formHeading}
                </h3>

                <div className="contact-field">
                  <label htmlFor="contact-name" className="contact-field-label">
                    {uiText.contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={uiText.contact.namePlaceholder}
                    className="contact-input"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email" className="contact-field-label">
                    {uiText.contact.emailInputLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={uiText.contact.emailPlaceholder}
                    className="contact-input"
                  />
                </div>

                <div className="contact-field">
                  <label
                    htmlFor="contact-message"
                    className="contact-field-label"
                  >
                    {uiText.contact.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={uiText.contact.messagePlaceholder}
                    className="contact-input contact-textarea"
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  <Send size={15} strokeWidth={1.75} aria-hidden="true" />
                  <span>{uiText.contact.submitButton}</span>
                </button>

                {submitted && (
                  <p className="contact-sent-notice" role="status">
                    {uiText.contact.sentNotice}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <p className="site-footer-copy">{uiText.contact.footerCopy}</p>
          <span className="site-footer-location mono">{profile.location}</span>
        </div>
      </footer>
    </>
  );
}
