import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './layout/Header';
import HeroSection from './pages/Hero.jsx';
import Services from './pages/Services.jsx';
import Commitment from './pages/Commitment.jsx';
import Achievements from './pages/Achievements.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './layout/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <Services />
    <Commitment />
    <Achievements />
    <Contact />
    <Footer />
  </StrictMode>
);
