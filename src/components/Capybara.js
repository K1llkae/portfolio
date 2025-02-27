import React from 'react';
import '../styles/Capybara.css';
import capybaraImg from '../assets/capybara.png';
export default function Capybara() {
  return (
    <div className="capybara-container">
      <img src={capybaraImg} alt="Капибара" className="capybara-img" />
    </div>
  );
}