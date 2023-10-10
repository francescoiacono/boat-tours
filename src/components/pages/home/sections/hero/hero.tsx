import { PrimaryButton } from '@/components/ui';
import { HeroTitle } from './heroTitle';
import { Waves } from './waves';

export const Hero = () => {
  return (
    <section aria-labelledby='hero-section' role='banner'>
      <div className='relative flex flex-col justify-end top-0 left-0 h-screen w-full text-white z-0 bg-hero-pattern bg-no-repeat bg-bottom bg-cover'>
        <Waves />
        <div className=' z-10 absolute flex w-full h-full justify-center items-center'>
          <div className='flex flex-col items-center gap-4 w-full'>
            <HeroTitle />
          </div>
        </div>
      </div>
    </section>
  );
};
