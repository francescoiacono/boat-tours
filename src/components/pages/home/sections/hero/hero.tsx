import { PrimaryButton } from '@/components/ui';
import { HeroTitle } from './heroTitle';
import { Waves } from './waves';

export const Hero = () => {
  return (
    <section aria-labelledby='hero-section'>
      <div className='relative flex flex-col justify-end top-0 left-0 h-screen w-screen text-white z-0 bg-hero-pattern bg-no-repeat bg-bottom bg-cover'>
        <Waves />
        <div className=' z-10 absolute flex w-full h-full justify-center items-center'>
          <div className='flex flex-col items-center gap-4 w-full'>
            <HeroTitle />
            <div className='flex flex-1 justify-end'>
              <PrimaryButton className='text-2xl'>Book Now</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
