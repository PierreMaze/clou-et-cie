import PictureBgHero from '../assets/img/PictureBgHero.webp';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return (
    <div className="relative h-full bg-orange-200" id="#hero">
      <div className="w-full ">
        <img
          className="object-cover w-full h-screen"
          src={PictureBgHero}
          srcSet="https://images.pexels.com/photos/7217928/pexels-photo-7217928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Picture renovation royalty free"
          role="img"
        />
      </div>
      <div className="absolute top-0 w-full h-screen z-1 bg-stone-950/60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-4 lg:mx-[8rem] text-center text-orange-50 tracking-wider">
        <h1 className="mt-6 text-xl font-bold lg:text-5xl">
          Votre partenaire de confiance pour tous vos travaux de rénovation
        </h1>
        <p className="mt-8 text-sm font-medium leading-relaxed text-stone-300 lg:text-xl">
          Clou&Cie réalise tous vos projets de construction, de la plomberie à
          la rénovation complète, avec une expertise.
        </p>
        <div className="flex flex-row gap-10 my-16 ">
          <a
            href="#contact"
            className="duration-300 ease-in-out delay-100 leading-7 text-orange-50 lg:max-w-none  rounded-lg bg-orange-800 w-full mx-auto md:w-fit  md:px-8 py-2.5 text-sm font-semibold shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
          >
            Devis gratuit
          </a>
          <a
            href="#realisations"
            className="flex items-center duration-300 ease-linear delay-100 hover:decoration-2 hover:underline hover:underline-offset-8"
          >
            Voir mes réalisations️{' '}
            <span aria-hidden="true">
              <ArrowRightIcon className="ml-2 size-4" />
            </span>
          </a>
        </div>
        <div className="mt-6 -mb-24 duration-300 ease-in-out delay-100 cursor-pointer animate-bounce size-8 rounded-3xl hover:bg-orange-900 bg-orange-50 group">
          <ArrowDownIcon className="duration-300 ease-in-out delay-100 group-hover:text-orange-100 m-1.5 mx-auto text-stone-950 size-5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
