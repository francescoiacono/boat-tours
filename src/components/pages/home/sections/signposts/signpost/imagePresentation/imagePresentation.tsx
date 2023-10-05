import { Cruise } from '@/data';
import Image from 'next/image';

interface ImagePresentationProps {
  cruise: Cruise;
}

export const ImagePresentation: React.FC<ImagePresentationProps> = (props) => {
  const { cruise } = props;

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
      <h2 className='text-center text-gray-700 font-thin'>
        Only £{cruise.price}
      </h2>
    </div>
  );
};
