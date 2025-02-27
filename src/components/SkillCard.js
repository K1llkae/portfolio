import React from 'react';
import '../styles/SkillCard.css';

export default function SkillCard({ title, description }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
