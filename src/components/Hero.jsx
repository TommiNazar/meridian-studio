import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logoEs from '../assets/images/meridian-hero-logo.png';
import logoEn from '../assets/images/meridian-hero-logo-ingles.png';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const logo = language === 'es' ? logoEs : logoEn;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={logo} alt="Meridian Studio" className="hero-logo" />
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-cta">
          <button onClick={scrollToContact}>{t.hero.cta}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;