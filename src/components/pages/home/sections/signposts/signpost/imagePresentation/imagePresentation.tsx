import { Cruise } from '@/data';
import Image from 'next/image';

interface ImagePresentationProps {
  cruise: Cruise;
  hovering: boolean;
}

export const ImagePresentation: React.FC<ImagePresentationProps> = (props) => {
  const { cruise, hovering } = props;

  return (
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
      <h2
        className={`${
          hovering ? 'text-white' : 'text-gray-500'
        } text-center font-thin`}
      >
        From £{cruise.price}
      </h2>
    </div>
  );
};
