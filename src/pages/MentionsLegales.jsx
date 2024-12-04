import { Suspense } from 'react';
import Loading from '../components/Loader.jsx';

const MentionsLegales = () => {
  return (
    <div className="flex flex-col px-20 my-8 gap-y-10">
      <h1 className="mt-8 text-4xl font-bold text-center">
        MENTIONS LEGALES PAGE
      </h1>
      <Suspense fallback={<Loading />}>
        <img
          className="object-cover object-center w-full h-80 rounded-2xl"
          src="https://imgs.search.brave.com/dQe3uObF1z3psH4oEbhhD4hhQ9lLASrMhkmGT6nZEJk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/ODcwMzIyNC9mci9w/aG90by9tYW5kYXRh/aXJlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1vU2cwSEds/TldvbTB1akxOVDFt/dHBpZjZxQnNrcFI2/UmtqVlNZdm9GNF9B/PQ"
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

export default MentionsLegales;
