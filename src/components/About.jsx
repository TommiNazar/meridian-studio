import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import studio1 from '../assets/images/studio-1.jpg';
import studio2 from '../assets/images/studio-2.jpg';
import studio3 from '../assets/images/studio-3.jpg';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <div className="about-images">
            <img src={studio1} alt="Estudio de doblaje" />
            <img src={studio2} alt="Equipo de trabajo" />
            <img src={studio3} alt="Sala de grabación" className="img-wide" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;