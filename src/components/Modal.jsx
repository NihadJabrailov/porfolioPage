import { useEffect } from 'react';
import { X, ArrowUpRight, ImageOff } from 'lucide-react';
import { uiText } from '../data/portfolioData';
import './Modal.css';

export default function Modal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
      >
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-index mono">{certificate.index}</span>
            <h3 id="certificate-modal-title" className="modal-title">
              {certificate.title}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label={uiText.certificates.closeLabel}
            autoFocus
          >
            <X size={18} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <span className="modal-meta-label">
                {uiText.certificates.issuerLabel}
              </span>
              <span className="modal-meta-value">{certificate.issuer}</span>
            </div>
            <div className="modal-meta-item">
              <span className="modal-meta-label">
                {uiText.certificates.dateLabel}
              </span>
              <span className="modal-meta-value mono">{certificate.date}</span>
            </div>
          </div>

          <p className="modal-description">{certificate.description}</p>

          <div className="modal-image-wrapper">
            {certificate.imageUrl ? (
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className="modal-image"
              />
            ) : (
              <div className="modal-image-placeholder">
                <ImageOff size={20} strokeWidth={1.5} aria-hidden="true" />
                <span>{uiText.certificates.noImageText}</span>
              </div>
            )}
          </div>
        </div>

        {certificate.credentialUrl && (
          <div className="modal-footer">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-credential-link"
            >
              <span>{uiText.certificates.credentialLinkLabel}</span>
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
