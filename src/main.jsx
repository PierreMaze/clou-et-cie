import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './layout/Header';
import HeroSection from './pages/Hero.jsx';
import Services from './pages/Services.jsx';
import Commitment from './pages/Commitment.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <Services />
    <Commitment />
  </StrictMode>
);
