import { Suspense, lazy } from 'react';

const Hero = lazy(() => import('./pages/Hero.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Commitment = lazy(() => import('./pages/Commitment.jsx'));
const Archivements = lazy(() => import('./pages/Achievements.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

const App = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Hero />
      <Services />
      <Commitment />
      <Archivements />
      <Contact />
    </Suspense>
  );
};

export default App;
