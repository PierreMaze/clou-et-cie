import { Suspense } from 'react';
function Loading() {
  return <h2>🌀 Chargement...</h2>;
}
const ConditionGeneralUtilisation = () => {
  return (
    <div className="flex flex-col px-20 my-8 gap-y-10">
      <h1 className="mt-8 text-4xl font-bold text-center">
        CONDITION D&apos;UTILISATION PAGE
      </h1>
      <Suspense fallback={<Loading />}>
        <img
          className="object-cover object-center w-full h-80 rounded-2xl"
          src="https://imgs.search.brave.com/9nHltyh1cded47nRvBTyGcGPmvA0vdYaqFTynk1iK7o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZ3Yt/ZXhwZXJ0LXYyLnMz/LmV1LXdlc3QtMy5h/bWF6b25hd3MuY29t/L2ltYWdlcy8yMS1j/eXRvbm4tcGhvdG9n/cmFwaHktR0phbzNa/VFg5Z1UtdW5zcGxh/c2guanBn"
          alt="Pictures random"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum
          aliquam odio, iusto amet maiores esse laudantium itaque minus
          accusantium consequatur reprehenderit quis sapiente rerum. Atque,
          corporis. Soluta explicabo odit exercitationem aliquid? Fugiat itaque,
          in voluptates cumque sunt repudiandae provident?
        </p>
      </Suspense>
    </div>
  );
};

export default ConditionGeneralUtilisation;
