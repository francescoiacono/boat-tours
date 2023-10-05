import { Camera } from '@/components/ui/icons';

export const Header = () => {
  return (
    <div className='flex flex-col gap-5 mt-20 mb-10'>
      <Camera className='w-16 h-16 -rotate-12 opacity-80' />
      <h1 className='font-extralight text-3xl uppercase'>
        Explore <br /> <span className='text-7xl font-semibold'>Ischia</span>
      </h1>
    </div>
  );
};
