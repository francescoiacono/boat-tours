export const Waves = () => {
  return (
    <section className='flex overflow-hidden h-[100px] relative z-[1]'>
      <div className='absolute bottom-0 h-full w-[100%] bg-wave-pattern bg-cover bg-repeat animate-wave-1'></div>
      <div className='absolute bottom-0 h-full w-[100%] bg-wave-pattern bg-cover bg-repeat animate-wave-2 opacity-80'></div>
      <div className='absolute bottom-0 h-full w-[100%] bg-wave-pattern bg-cover bg-repeat animate-wave-3 opacity-60'></div>
    </section>
  );
};
