'use client';
import { useState } from 'react';
import { ArrowRight } from '@/components/ui/icons';
import { Cruise } from '@/data';
import Image from 'next/image';

interface SignPostProps {
  cruise: Cruise;
}
export const SignPost: React.FC<SignPostProps> = ({ cruise }) => {
  const [hovering, setHovering] = useState(false);

  const handleOnMouseEnter = () => {
    setHovering(true);
  };

  const handleOnMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className='flex flex-col max-w-xs gap-10 justify-around items-center border border-gray-300 rounded p-5 hover:bg-red-600 hover:text-white hover:border-none hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'
    >
      <div className='flex flex-col gap-2 items-center'>
        <Image
          src={cruise.image}
          alt='tour image'
          width={96}
          height={96}
          className='rounded-full object-cover w-24 h-24'
        />
        <h1 className='text-2xl uppercase text-center font-bold'>
          {cruise.name}
        </h1>
        <h2 className='text-center text-gray-700 font-thin'>
          Only £{cruise.price}
        </h2>
      </div>
      <div className='flex flex-col gap-10'>
        <p>{cruise.description}</p>
        <a
          className='font-bold uppercase text-sm flex justify-center gap-2 items-center'
          href={cruise.link}
        >
          Read More
          <ArrowRight className='w-5 h-5 transition-all' white={hovering} />
        </a>
      </div>
    </div>
  );
};
