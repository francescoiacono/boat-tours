import { Waves } from './waves/waves';

export const Hero = () => {
  return (
    <section>
      <div className='relative flex flex-col justify-end top-0 left-0 h-screen w-screen text-white z-0 bg-hero-pattern bg-no-repeat bg-bottom bg-cover'>
        <Waves />
        <div className=' z-10 absolute flex w-full h-full justify-center items-center'>
          <div className='flex flex-col items-center gap-4 w-full'>
            <div className='uppercase px-3 md:p-0 text-7xl text-center font-bold mb-5'>
              <h1>
                Explore the <br /> Enchanting Waters <br /> of{' '}
                <span className='text-red-600'>Ischia</span> with Us
              </h1>
            </div>
            <div className='flex flex-1 justify-end'>
              <button className='bg-red-600 text-white uppercase text-black px-10 py-3 rounded-md font-semibold text-xl'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
