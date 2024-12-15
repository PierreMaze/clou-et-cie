import { useState } from 'react';
import LogoClouEtCie from '/images/logo-clou-et-cie.webp';
import LegalMentions from '../components/MentionsLegales.jsx';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="h-full shadow bg-stone-800">
        <div className="flex flex-col items-center w-full max-w-screen-xl gap-5 p-4 mx-auto lg:gap-0 lg:flex-row md:flex md:items-center md:justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Clou & Cie</span>
            <div className="flex items-center">
              <img className="w-auto h-8" src={LogoClouEtCie} alt="" />
              <div className="ml-4">
                <h1 className="text-lg font-bold text-orange-50">Clou & Cie</h1>
                <p className="text-sm tracking-wide text-stone-500">
                  Le clou qui fait tout.
                </p>
              </div>
            </div>
          </a>
          <button
            onClick={openModal}
            className="text-orange-50 hover:underline"
          >
            Mentions Legales
          </button>
          <span className="text-sm text-stone-400 sm:text-center ">
            © 2024 Clou&Cie. All Rights Reserved.
          </span>
        </div>
      </footer>

      <LegalMentions isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Footer;
