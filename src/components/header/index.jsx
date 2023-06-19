import React from 'react';
import '../styles.css';

function Header() {
  return (
    <div className="header">
      <button>Inicio</button>
      <button>Lista de Animes</button>
      <button>Buscar</button>
      <button>Mi Lista</button>
      <button>Perfil</button>
    </div>
  );
}

export default Header;