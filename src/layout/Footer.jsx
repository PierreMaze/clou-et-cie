import { useState } from 'react';
import LegalMentions from '../components/modal/MentionsLegales.jsx';
import Logo from '../components/Logo.jsx';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="h-full shadow bg-stone-800">
        <div className="flex flex-col items-center w-full max-w-screen-xl gap-5 p-4 mx-auto lg:gap-0 lg:flex-row md:flex md:items-center md:justify-between">
          <Logo />
          <button
            onClick={openModal}
            className="underline text-orange-50 underline-offset-4 lg:no-underline hover:underline hover:underline-8 hover:text-orange-600"
          >
            Mentions Legales
          </button>
          <span className="text-sm text-stone-400 sm:text-center ">
            © 2024 Clou&Cie. Tous droits réservés.
          </span>
        </div>
      </footer>

      <LegalMentions isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Footer;
