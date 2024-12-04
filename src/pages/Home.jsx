import { Suspense } from 'react';
import Loading from '../components/Loader.jsx';

const Home = () => {
  return (
    <div className="flex flex-col px-20 my-8 gap-y-10">
      <h1 className="mt-8 text-4xl font-bold text-center">HOME PAGE</h1>
      <Suspense fallback={<Loading />}>
        <img
          className="object-cover object-center w-full h-80 rounded-2xl"
          src="https://imgs.search.brave.com/8r8GvzkWiF-6NwuzHG-KX4I2A0whFvXWi-hYMSgu0-A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by90cmF2YXV4bGli/LzcxZWFjY2MzLTFi/ZGYtNGFhMS1hOWE4/LWU2NDM0YWNkNWJi/MF90cm91dmVyLWNo/YW50aWVycy1iYXRp/bWVudC1idHAuanBn/P2l4bGliPWdhdHNi/eUZQJmF1dG89Y29t/cHJlc3MsZm9ybWF0/JmZpdD1jbGlwJnE9/ODAmcmVjdD0wLDAs/MTg3MCwxMjAwJnc9/MTg3MCZoPTEyMDA"
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

export default Home;
