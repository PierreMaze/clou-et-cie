import { useState, useEffect } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';

const CookieConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted === 'true') {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsOpen(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed z-10 p-6 rounded-lg shadow-lg w-60 bg-orange-50 bottom-4 right-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-stone-900">
            Paramètres des cookies
          </h3>
          <button
            type="button"
            className="p-2 bg-transparent rounded-md text-stone-400 hover:bg-orange-200 hover:text-stone-900"
            onClick={() => setIsOpen(false)}
          >
            <FaCircleXmark size={24} className="text-stone-700" />
          </button>
        </div>
        <div className="mt-2">
          <p className="text-sm text-stone-500">
            Nous utilisons des cookies pour améliorer votre expérience sur notre
            site. Veuillez nous faire savoir si vous acceptez ou refusez
            l&apos;utilisation de cookies.
          </p>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-white border rounded-md text-stone-700 border-stone-300 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oranger-500"
            onClick={rejectCookies}
          >
            Refuser
          </button>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium bg-orange-600 border border-transparent rounded-md text-orange-50 bg-oranger-600 hover:bg-oranger-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oranger-500"
            onClick={acceptCookies}
          >
            Accepter
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsentModal;
