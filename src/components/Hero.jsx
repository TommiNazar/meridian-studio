import React from 'react';
import logo from '../assets/images/meridian-logo-crema.jpeg';

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero-about">
      <div className="container">
        <div className="hero-grid">
          {/* Columna izquierda: Logo + eslogan + subtítulo + CTA - centrados */}
          <div className="hero-left">
            <img src={logo} alt="Meridian Studio" className="hero-logo" />
            <h2 className="hero-tagline">LA VOZ DE LAS GRANDES HISTORIAS</h2>
            <p className="hero-subtitle">Doblaje profesional</p>
            <button className="hero-cta" onClick={scrollToContact}>
              Hablá con nosotros
            </button>
          </div>
          
          {/* Columna derecha: Texto existente */}
          <div className="hero-right">
            <p>
              En Meridian conectamos historias globales con audiencias de habla hispana. 
              Somos un estudio de doblaje y localización audiovisual con base en Córdoba, 
              Argentina, enfocado en adaptar contenidos internacionales sin perder su esencia original.
            </p>
            <p>
              Cubrimos el proceso de punta a punta: interpretación, dirección, adaptación de guion, 
              edición, sincronización y mezcla. Cuidamos el contexto, la intención y el tono para 
              lograr producciones fieles que suenan naturales en el mercado latinoamericano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;