import { Header } from './header';
import { GalleryInfo } from './galleryInfo';
import { WavePattern } from './wavePattern';

export const Gallery = () => {
  return (
    <section className='relative'>
      <div className='p-10 flex flex-col gap-4 text-black bg-white'>
        <div className='w-10/12 mx-auto'>
          <Header />
          <GalleryInfo />
        </div>
      </div>
      <WavePattern />
    </section>
  );
};
