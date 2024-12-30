import PropTypes from 'prop-types';
import { FaCircleXmark } from 'react-icons/fa6';

const LegalMentions = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-stone-800">
      <div className="relative bg-orange-50 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] lg:max-h-[80vh] overflow-hidden">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute z-10 text-stone-500 top-4 right-4 hover:text-stone-700"
        >
          <FaCircleXmark size={24} className="text-orange-700" />
        </button>

        {/* Modal Title */}
        <div className="p-6 pb-2 border-b">
          <h2 className="text-2xl font-semibold text-orange-700">
            Mentions Légales
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <section className="mb-6">
            <h3 className="mb-4 text-xl font-medium">
              1. Identification de l&apos;entreprise
            </h3>
            <p className="mb-2 text-stone-600">
              <strong>Raison sociale :</strong> Clou & Cie
            </p>
            <p className="mb-2 text-stone-600">
              <strong>Forme juridique :</strong> Micro entreprise
            </p>
            <p className="mb-2 text-stone-600">
              <strong>Adresse :</strong> 85 Rue de Lacanau, 33200 Bordeaux,
              FRANCE
            </p>
            <p className="mb-2 text-stone-600">
              <strong>Numéro de SIRET :</strong> 53790427800026
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-4 text-xl font-medium">
              2. Directeur de publication
            </h3>
            <p className="text-stone-600">
              <strong>Pierre Mathieu MAZELAYGUE - </strong>
              <a
                href="mailto:promazelaygue@gmail.com"
                className="text-orange-700 underline underline-offset-4 lg:no-underline hover:underline hover:underline-offset-4"
              >
                promazelaygue@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-4 text-xl font-medium">3. Hébergement</h3>
            <p className="mb-2 text-stone-600">
              <strong>Nom de l&apos;hébergeur :</strong> Netlify, Inc
            </p>
            <p className="text-stone-600">
              <strong>Coordonnées :</strong> Netlify, Inc. 512, 2e rue, Fl 2 San
              Francisco, CA 94107
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-4 text-xl font-medium">
              4. Propriété intellectuelle
            </h3>
            <p className="text-stone-600">
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              graphismes, logo, etc.) est la propriété exclusive de Clou & Cie,
              sauf mention contraire. Toute reproduction, distribution,
              modification, adaptation, retransmission ou publication, même
              partielle, est strictement interdite sans l&apos;accord exprès de
              Clou & Cie.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-4 text-xl font-medium">5. Cookies</h3>
            <p className="text-stone-600">
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation. Vous pouvez paramétrer vos préférences concernant les
              cookies à tout moment.
            </p>
          </section>

          <section>
            <h3 className="mb-4 text-xl font-medium">6. Contact</h3>
            <p className="mb-2 text-stone-600">
              <strong>Email :</strong> clou-cie@hotmail.fr
            </p>
            <p className="text-stone-600">
              <strong>Téléphone :</strong>{' '}
              <span className="tabular-nums slashed-zero">
                +33 06.31.90.95.35
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

LegalMentions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LegalMentions;
