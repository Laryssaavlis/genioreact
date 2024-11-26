import React, { useState } from 'react';
import './LampadaGenio.scss';

const LampadaGenio = () => {
  const [isLampVisible, setIsLampVisible] = useState(true);

  const toggleImage = () => {
    setIsLampVisible(!isLampVisible);
  };

  return (
    <div className="container">
      <h1>Liberte a magia da programação com a lâmpada de Aladim.</h1>
      <div className="image-container">
        {isLampVisible ? (
          <img src="/lampada.png" alt="Lâmpada de Aladim" className="image" />
        ) : (
          <img src="/genio.png" alt="Gênio" className="image" />
        )}
      </div>
      <button onClick={toggleImage}>Clique aqui</button>
    </div>
  );
};

export default LampadaGenio;

