import { ImCross } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';

import picture from '../assets/img/PictureBgHero.webp';

const Contact = () => {
  return (
    <div className="flex flex-col bg-orange-50" id="contact">
      <div className="lg:flex lg:flex-row">
        <span className="w-full h-[2px] -mr-6 lg:ml-0 my-auto rounded-md"></span>
        <ImCross className="hidden mx-2 text-orange-700 rotate-45 lg:flex size-7" />
        <span className="flex mx-auto w-4/5 lg:ml-0 lg:flex lg:w-full h-[2px] my-auto  lg:mr-12 rounded-md bg-orange-600"></span>
      </div>
      <div className="flex h-full ">
        <div className="hidden lg:flex lg:relative lg:w-1/2 lg:-mt-4">
          <div className="absolute top-0 w-full h-full z-1 bg-orange-800/30"></div>
          <img src={picture} alt="" className="w-full" />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:mx-8">
          <span className="h-56 w-[2px] lg:bg-orange-600"></span>
        </div>
        <div className="mx-6 mt-6 lg:w-1/2 lg:mr-12">
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 text-pretty sm:text-3xl lg:text-balance">
            Prêt à commencer votre projet ?
          </h2>
          <p className="font-semibold text-orange-700 text-base/7">
            Je vous accompagne.
          </p>
          <p className="mt-6 text-stone-600 text-lg/8">
            Pour toute demande de devis ou pour obtenir plus d&apos;informations
            sur mes services, n&apos;hésitez pas à me contacter.
          </p>
          <p className="mt-3 text-stone-600 text-lg/8">
            Je suis à l’écoute de vos besoins.
          </p>
          <div className="flex flex-row mt-12 mb-6">
            <div className="flex justify-start w-fit">
              <a
                href="mailto:clou-cie@hotmail.fr"
                target="_blank"
                className="w-full px-8 py-3 text-sm font-semibold leading-7 text-center duration-300 ease-in-out delay-100 bg-orange-700 rounded-lg shadow-sm text-orange-50 sm:max-w-none sm:w-fit hover:bg-orange-800"
              >
                {window.screen.width < '1024px'
                  ? 'Contactez-moi dès maintenant'
                  : 'Contactez-moi'}
              </a>
            </div>
            <span className="p-2 mx-6 my-auto duration-300 ease-in-out delay-100 bg-orange-700 rounded-full hover:bg-orange-800">
              <a href="tel:+33 6 31 90 95 35" target="_blank">
                <BsTelephoneFill className="my-auto text-orange-50 size-4 " />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
