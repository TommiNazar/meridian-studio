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
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>{t.about.title}</h2>
            <p>
              <span className="highlight">Meridian</span> {t.about.p1}
            </p>
            <p>{t.about.p2}</p>
            <div className="about-values">
              <div className="value-item">
                <i className="fas fa-microphone"></i>
                <span>{t.about.values.interpretation}</span>
              </div>
              <div className="value-item">
                <i className="fas fa-pen-fancy"></i>
                <span>{t.about.values.adaptation}</span>
              </div>
              <div className="value-item">
                <i className="fas fa-video"></i>
                <span>{t.about.values.synchronization}</span>
              </div>
              <div className="value-item">
                <i className="fas fa-sliders-h"></i>
                <span>{t.about.values.mix}</span>
              </div>
            </div>
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