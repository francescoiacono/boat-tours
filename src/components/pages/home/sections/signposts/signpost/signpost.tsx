'use client';
import { useState } from 'react';
import { Cruise } from '@/data';
import { ImagePresentation } from './imagePresentation';
import { TextContent } from './textContent';

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
    <article
      tabIndex={0}
      aria-labelledby={`title-${cruise.id}`}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className='flex flex-col max-w-xs gap-10 justify-around items-center border border-gray-300 rounded p-5 hover:bg-red-600 hover:shadow-xl hover:text-white hover:border-none hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'
    >
      <ImagePresentation cruise={cruise} />
      <TextContent cruise={cruise} hovering={hovering} />
    </article>
  );
};
