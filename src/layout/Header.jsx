import { useState } from 'react';

import LogoClouEtCie from '/images/logo-clou-et-cie.webp';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaCircleXmark } from 'react-icons/fa6';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed z-50 w-full bg-stone-900">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
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
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-300"
          >
            <span className="sr-only">
              {isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            </span>
            {isMenuOpen ? (
              <FaCircleXmark className="w-6 h-6" aria-hidden="true" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden tracking-widest lg:flex lg:gap-x-12 ">
          <a
            href="#services"
            className="font-semibold hover:underline hover:underline-offset-8 hover:text-orange-600 text-stone-300 text-sm/6"
          >
            Services
          </a>
          <a
            href="#engagements"
            className="font-semibold hover:underline hover:underline-offset-8 hover:text-orange-600 text-stone-300 text-sm/6"
          >
            Engagements
          </a>
          <a
            href="#realisations"
            className="font-semibold hover:underline hover:underline-offset-8 hover:text-orange-600 text-stone-300 text-sm/6"
          >
            Réalisations
          </a>
          <a
            href="#contact"
            className="font-semibold hover:underline hover:underline-offset-8 text-stone-300 hover:text-orange-600 text-sm/6"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-stone-900 sm:max-w-full sm:ring-1 sm:ring-stone-900/10">
            <div className="flex items-center justify-between ">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Clou & Cie</span>
                <div className="flex items-center">
                  <img className="w-auto h-8" src={LogoClouEtCie} alt="" />
                  <div className="ml-4">
                    <h1 className="text-lg font-bold text-orange-50">
                      Clou & Cie
                    </h1>
                    <p className="text-sm tracking-wide text-stone-500">
                      Le clou qui fait tout.
                    </p>
                  </div>
                </div>
              </a>
              <button
                type="button"
                onClick={toggleMenu}
                className="-m-2.5 rounded-md p-2.5 text-orange-600"
              >
                <span className="sr-only">Fermer le menu</span>
                <FaCircleXmark className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-stone-500/10">
                <div className="py-6 space-y-2 tracking-widest ">
                  <a
                    href="#services"
                    onClick={closeMenu} // Fermer le menu lorsqu'un lien est cliqué
                    className="block px-3 py-2 -mx-3 font-semibold text-orange-100 rounded-lg text-base/7 hover:bg-orange-600"
                  >
                    Services
                  </a>
                  <a
                    href="#engagements"
                    onClick={closeMenu}
                    className="block px-3 py-2 -mx-3 font-semibold text-orange-100 rounded-lg text-base/7 hover:bg-orange-600"
                  >
                    Engagements
                  </a>
                  <a
                    href="#realisations"
                    onClick={closeMenu}
                    className="block px-3 py-2 -mx-3 font-semibold text-orange-100 rounded-lg text-base/7 hover:bg-orange-600"
                  >
                    Réalisations
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="block px-3 py-2 -mx-3 font-semibold text-orange-100 rounded-lg text-base/7 hover:bg-orange-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
