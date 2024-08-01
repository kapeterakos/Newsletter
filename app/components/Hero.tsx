import Image from 'next/image';
import React from 'react';

import NewsLetter from "./NewsLetter";
import SocialMedia from './SocialMedia';

const Hero: React.FC = () => {
  return (
    <section className="bg-light-blue-500 flex flex-col md:flex-row items-center justify-center min-h-screen p-8">
      <div className="md:w-1/2 text-center md:text-center mb-8 md:mb-0">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600   to-yellow-200 to-50% bg-clip-text text-transparent">
            Magyarország <span className='bg-gradient-to-r from-yellow-200 to-blue-600 to-50% bg-clip-text text-transparent'>legújabb íze!</span>
        </h1>
        <p className="text-2xl mt-4 text-gray-700">
            Iratkozz fel listánkra, hogy elsőként tarthasd kezedben a nyár legnagyobb slágerét!
        </p>

        <div className="my-12 flex justify-center">
            <NewsLetter/>
        </div>

        <div className="my-12 flex justify-center">
            <SocialMedia />
        </div>

      </div>

      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/bottle.png"
          alt="Spark"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>

    </section>
  );
};

export default Hero;
