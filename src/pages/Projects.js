import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <h2>Мои проекты</h2>
      <div className="projects-grid">
        <ProjectCard title="Todo List" description="Простой список задач" link="https://github.com/K1llkae" />
        <ProjectCard title="WeatherApp" description="Приложение прогноза погоды" link="https://github.com/K1llkae" />
        <ProjectCard title="Solo Leveling Site" description="Фан-сайт по Solo Leveling" link="https://github.com/K1llkae" />
        <ProjectCard title="Capybara Site" description="Сайт, посвящённый капибарам" link="https://github.com/K1llkae" />
      </div>
    </div>
  );
}