import Image from 'next/image';

export const Header = () => {
  return (
    <div className='flex flex-col gap-5 mt-20 mb-10'>
      <Image
        src='/assets/images/ui/icons/camera.svg'
        width={70}
        height={70}
        alt='Camera'
        className=' -rotate-12 opacity-70'
      />
      <h1 className='font-extralight text-3xl uppercase'>
        Explore <br /> <span className='text-7xl font-semibold'>Ischia</span>
      </h1>
    </div>
  );
};
