import React from 'react';
import studio1 from '../assets/images/studio-1.jpg';
import studio2 from '../assets/images/studio-2.jpg';
import studio3 from '../assets/images/studio-3.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>¿Querés llevar tu contenido al público hispanohablante?</h2>
            <p>
              Si tenés una productora, empresa, sos creador de contenido, desarrollador de videojuegos, 
              desarrollamos una propuesta acorde a tus objetivos. En Meridian podemos ayudarte a adaptar 
              y producir tu contenido para español latino.
            </p>
            <p>
              Entendemos al doblaje como una adaptación cultural que debe preservar la emoción e intención 
              original y transformarlo en una experiencia natural para una nueva audiencia.
            </p>
            <p>
              Para nosotros, doblar no significa simplemente reemplazar una voz por otra. Significa preservar 
              la emoción, personalidad e intención original y transformarlo en una experiencia natural para 
              una nueva audiencia.
            </p>
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