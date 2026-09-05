import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Work = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const demos = t.work.demos;

  // URLs completas de los videos de ScreenPal (con todos los parámetros)
  const videoUrls = [
    "https://go.screenpal.com/player/cOQhhLnwvqS?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
    "https://go.screenpal.com/player/cOQh11nwvYZ?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
    "https://go.screenpal.com/player/cOQhhLnwvqS?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1" // Demo 3 repetido
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
                  src={videoUrls[index]}
                  title={demo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
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