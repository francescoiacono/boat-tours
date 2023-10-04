import Image from 'next/image';

export const Gallery = () => {
  return (
    <section className='relative'>
      <div className='p-10 flex flex-col gap-4 text-black bg-white'>
        <div className='w-10/12 mx-auto'>
          <div className='flex flex-col gap-5 mt-20 mb-10'>
            <Image
              src='/assets/images/ui/icons/camera.svg'
              width={70}
              height={70}
              alt='camera icon'
              className=' -rotate-12 opacity-70'
            />
            <h1 className='font-extralight text-3xl uppercase'>
              Explore <br />{' '}
              <span className='text-7xl font-semibold'>Ischia</span>
            </h1>
          </div>

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
              <div className='h-full flex flex-col items-center justify-center gap-10 my-10 md:m-0'>
                <h1 className='text-5xl uppercase text-red-600'>Our gallery</h1>
                <p className='text-xl text-center'>
                  Explore Ischia across thousands of stunning photos.
                </p>
                <button className='bg-red-600 text-white px-10 py-2 rounded-md font-semibold text-md uppercase'>
                  View gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-wave-white-pattern absolute z-10 bg-cover bg-center bottom-[-150px] w-full h-[150px]'></div>
    </section>
  );
};
