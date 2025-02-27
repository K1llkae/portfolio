import React from 'react';
import { motion } from 'framer-motion';
import Capybara from '../components/Capybara';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Добро пожаловать!</h2>
      <Capybara />
    </motion.div>
  );
}
