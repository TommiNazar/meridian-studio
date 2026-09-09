import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logoSmall from '../assets/images/logonav.png';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          <img src={logoSmall} alt="Meridian Studio" className="nav-logo-img" />
          <span className="logo-text">MERIDIAN</span>
        </div>
        <div className="navbar-links">
          <button onClick={() => scrollTo('about')}>{t.nav.about}</button>
          <button onClick={() => scrollTo('work')}>{t.nav.work}</button>
          <button onClick={() => scrollTo('contact')}>{t.nav.contact}</button>
          <div className="language-toggle">
            <span 
              className={language === 'es' ? 'active' : ''} 
              onClick={() => { if (language !== 'es') toggleLanguage(); }}
            >
              ES
            </span>
            <span 
              className={language === 'en' ? 'active' : ''} 
              onClick={() => { if (language !== 'en') toggleLanguage(); }}
            >
              EN
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;