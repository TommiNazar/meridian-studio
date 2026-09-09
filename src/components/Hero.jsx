import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logo from '../assets/images/meridian-logo-crema.jpeg';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero-about">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <img src={logo} alt="Meridian Studio" className="hero-logo" />
            <h2 className="hero-tagline">{t.hero.tagline}</h2>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <button className="hero-cta" onClick={scrollToContact}>
              {t.hero.cta}
            </button>
          </div>
          <div className="hero-right">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;