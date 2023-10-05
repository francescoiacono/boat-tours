import Image from 'next/image';
import { InfoBox } from './infoBox';

export const GalleryInfo = () => {
  return (
    <div
      className='flex flex-col md:flex-row gap-10 justify-between
    '
    >
      <Image
        className='rounded transition-all hover:shadow-xl'
        src='/assets/images/pages/gallery/cruise-boat.jpg'
        width={500}
        height={300}
        alt='gallery'
      />
      <div className='flex flex-col-reverse md:flex-col'>
        <Image
          className='rounded transition-all hover:shadow-xl'
          src='/assets/images/pages/gallery/castle-ischia.jpg'
          width={600}
          height={400}
          alt='gallery'
        />

        <InfoBox />
      </div>
    </div>
  );
};
