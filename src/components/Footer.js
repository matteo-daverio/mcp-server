import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Chi Siamo</h3>
          <p>Una semplice applicazione React creata per dimostrare l'uso di componenti.</p>
        </div>
        <div className="footer-section">
          <h3>Link Utili</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Termini di Servizio</a></li>
            <li><a href="#contact">Contattaci</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Seguici</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Il Mio Sito Web React. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

export default Footer;
