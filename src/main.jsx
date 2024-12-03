import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home.jsx';
import CGU from './pages/CGU.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <CGU />
    <MentionsLegales />
  </StrictMode>
);
