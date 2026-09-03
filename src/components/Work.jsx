import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import demo1 from '../assets/videos/demo1.mp4';
import demo2 from '../assets/videos/demo2.mp4';
import demo3 from '../assets/videos/demo3.mp4';

const Work = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const demos = t.work.demos; // usamos las descripciones traducidas

  // Las rutas de video son fijas, solo cambian los textos
  const videoFiles = [demo1, demo2, demo3];

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
              <video controls preload="metadata">
                <source src={videoFiles[index]} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
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