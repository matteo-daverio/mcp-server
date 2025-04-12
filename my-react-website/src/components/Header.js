import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Benvenuto al Mio Sito Web React</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Chi Siamo</a></li>
          <li><a href="#contact">Contatti</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
