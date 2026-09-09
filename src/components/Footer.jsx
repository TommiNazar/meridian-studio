import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logoSmall from '../assets/images/logonav.png';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-wrapper">
            <img src={logoSmall} alt="Meridian Studio" className="footer-logo-img" />
            <span className="logo-text">MERIDIAN</span>
          </div>
          <p>{t.footer.tagline}</p>
        </div>
        <div className="footer-contact">
          <span><i className="fas fa-map-marker-alt"></i> {t.footer.address}</span>
          <a href="mailto:meridianstudio.cba@gmail.com">
            <i className="fas fa-envelope"></i> {t.footer.email}
          </a>
          <div className="social-links">
            <a href="#" aria-label="Web"><i className="fas fa-globe"></i></a>
            <a 
              href="https://www.linkedin.com/company/meridian-studio-cba/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* WhatsApp eliminado */}
          </div>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Meridian Studio. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;