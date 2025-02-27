import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>🐾 Абдусамат Абдулла</h1>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/projects">Проекты</Link></li>
        <li><Link to="/about">О себе</Link></li>
      </ul>
    </nav>
  );
}
