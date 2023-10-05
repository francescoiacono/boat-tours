import { PrimaryButton } from '@/components/ui';

export const InfoBox = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center gap-10 my-10 md:m-0'>
      <h1 className='text-5xl uppercase text-primary-color'>Our gallery</h1>
      <p className='text-xl text-center'>
        Explore Ischia across thousands of stunning photos.
      </p>
      <PrimaryButton className='text-2xl'>View gallery</PrimaryButton>
    </div>
  );
};
