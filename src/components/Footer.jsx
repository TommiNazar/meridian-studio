import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo-text">MERIDIAN</span>
          <p>{t.footer.tagline}</p>
        </div>
        <div className="footer-contact">
          <span><i className="fas fa-map-marker-alt"></i> {t.footer.address}</span>
          <a href="mailto:meridiandoblaje@gmail.com">
            <i className="fas fa-envelope"></i> {t.footer.email}
          </a>
          <a href="tel:+5493511234567">
            <i className="fas fa-phone"></i> {t.footer.phone}
          </a>
          <div className="social-links">
            <a href="#" aria-label="Web"><i className="fas fa-globe"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
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