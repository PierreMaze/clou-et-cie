import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './layout/Header';
import App from './App.jsx';
import Footer from './layout/Footer.jsx';
import CookieConsentModal from './components/modal/Cookies';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <CookieConsentModal />
    <Footer />
  </StrictMode>
);
