import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HeroSection from './pages/Hero.jsx';
import CGU from './pages/CGU.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import Header from './layout/Header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <CGU />
    <MentionsLegales />
  </StrictMode>
);
