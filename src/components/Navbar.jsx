import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand" onClick={handleLinkClick}>
          {profile.fullName}
        </a>

        <nav className="navbar-nav">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="navbar-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          onClick={handleToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" className="navbar-mobile-menu">
          <div className="container">
            <ul className="navbar-mobile-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="navbar-mobile-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
