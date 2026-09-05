import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Work = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const demos = t.work.demos;

  // IDs de los videos de ScreenPal
  const videoIds = [
    "cOQhhLnwvqS",  // Demo 1
    "cOQh11nwvYZ",  // Demo 2
    "cOQhhLnwvqS"   // Demo 3 (repetido)
  ];

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="work-header">
          <h2>{t.work.title}</h2>
          <p>{t.work.subtitle}</p>
        </div>
        <div className="demo-grid">
          {demos.map((demo, index) => (
            <div key={index} className="demo-card">
              <div className="video-wrapper">
                <iframe
                  src={`https://player.screenpal.com/embed/${videoIds[index]}`}
                  title={demo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-body">
                <h4>{demo.title}</h4>
                <p>{demo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;