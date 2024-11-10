import { useState } from "react";
import "../App.css";

const Header = () => {
  return(
  <>
    <header>
      <nav className="navigation">
        <a href="#Inicio" className="active">
          Inicio
        </a>
        <a href="#Tiempo">Linea de tiempo</a>
        <a href="#Protagonistas">Protagonistas</a>
        
      </nav>
    </header>
  </>
  );
};

export default Header;
