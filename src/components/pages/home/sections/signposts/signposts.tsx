import { Cruise, cruises } from '@/data';
import { SignPost } from './signpost';
import { TourDatesCTA } from './tourDatesCTA';

export const Signposts = () => {
  return (
    <section>
      <h1 className='text-5xl w-full text-center my-10 font-bold'>Cruises</h1>
      <div className='flex px-4 gap-4 justify-center flex-wrap'>
        {cruises.map((cruise: Cruise) => (
          <SignPost key={cruise.id} cruise={cruise} />
        ))}
      </div>
      <TourDatesCTA />
    </section>
  );
};
