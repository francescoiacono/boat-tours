import { Cruise } from '@/data';
import Image from 'next/image';

interface ImagePresentationProps {
  cruise: Cruise;
}

export const ImagePresentation: React.FC<ImagePresentationProps> = (props) => {
  const { cruise } = props;

  return (
    <Image
      src={cruise.image}
      alt='tour image'
      width={96}
      height={96}
      className='rounded-full object-cover w-24 h-24'
    />
  );
};
