import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="languageSwitcher">
        <h3>Ubicación</h3>
        <p>País de origen: </p>
        <p>Ubicación actual: </p>
        <div>
          <button>Español</button>
        </div>
      </div>
      <div className="footer-navigation">
        <ul>
          <li><a href="/help">AYUDA</a></li>
          <li><a href="#">CONDICIONES DE USO</a></li>
          <li><a href="#">POLÍTICA DE PRIVACIDAD Y AVISO SOBRE COOKIES</a></li>
          <li><a href="#">DAZN GROUP</a></li>
          <li><a href="#">NOTICIAS</a></li>
          <li><a href="#">TARJETAS PREPAGO</a></li>
          <li><a href="#">CANJEAR</a></li>
          <li><a href="#">SOBRE NOSOTROS</a></li>
        </ul>
        <small>NFLKL™</small>
      </div>
    </div>
  );
};

export default Footer;
