import LogoClouEtCie from '/images/logo-clou-et-cie.webp';
const Footer = () => {
  return (
    <footer className="h-full shadow bg-stone-800">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
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
        <span className="text-sm text-stone-400 sm:text-center ">
          © 2024 Clou&Cie. All Rights Reserved.
        </span>
        <button className="text-orange-50">Mentions Legales</button>{' '}
      </div>
    </footer>
  );
};

export default Footer;
