import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { certificates, uiText } from '../data/portfolioData';
import Modal from './Modal';
import './Certificates.css';

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <div className="section-header">
          <span className="section-index">{uiText.certificates.index}</span>
          <h2 className="section-title">{uiText.certificates.title}</h2>
        </div>

        <ul className="certificates-list">
          {certificates.map((cert) => (
            <li key={cert.id} className="certificate-row">
              <div className="certificate-row-main">
                <span className="certificate-index mono">{cert.index}</span>
                <div className="certificate-info">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                </div>
              </div>

              <div className="certificate-row-actions">
                <span className="certificate-date mono">{cert.date}</span>
                <button
                  type="button"
                  className="certificate-view-btn"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <span>{uiText.certificates.viewButton}</span>
                  <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
