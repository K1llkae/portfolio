import React from 'react';
import SkillCard from '../components/SkillCard';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>Обо мне</h2>
      <p>Я Самат Абдулла, музыкант, программист, дизайнер и художник, также занимаюсь геймдевом.</p>
      <h3>Изученные технологии:</h3>
      <div className="skills-grid">
        <SkillCard title="HTML & CSS" description="Основы веб-разработки." />
        <SkillCard title="JavaScript" description="Язык программирования для веба." />
        <SkillCard title="React" description="Библиотека для создания пользовательских интерфейсов." />
        <SkillCard title="C# (GameDev)" description="Используется в Unity для создания игр." />
        <SkillCard title="Python" description="Широко используемый язык для автоматизации, анализа данных и веб-разработки." />
      </div>
    </div>
  );
}
