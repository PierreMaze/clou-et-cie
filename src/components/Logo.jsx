import LogoClouEtCie from '../../public/images/logo-clou-et-cie.webp';

const Logo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Clou & Cie</span>
      <div className="flex items-center">
        <img className="w-auto h-10" src={LogoClouEtCie} alt="" />
        <div className="ml-4">
          <h1 className="text-lg font-bold text-orange-50">Clou & Cie</h1>
          <p className="text-sm tracking-wide text-stone-500">
            Le clou qui fait tout.
          </p>
        </div>
      </div>
    </a>
  );
};

export default Logo;