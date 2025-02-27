import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectCard.css';

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">GitHub</a>}
    </motion.div>
  );
}
