export const SignPost = () => {
  return (
    <div className='flex flex-col max-w-xs gap-10 justify-center items-center border border-gray-300 rounded p-5 hover:bg-red-600 hover:text-white hover:border-none hover:scale-105 transition-all duration-300 ease-in-out'>
      <div className='flex flex-col items-center'>
        <div className='w-24 h-24 bg-black rounded-full mb-4'></div>
        <h1 className='text-2xl'>MONSTER TOUR</h1>
        <h2>Only £99</h2>
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          molestias illum cum dolores nemo saepe culpa a animi pariatur voluptas
          quidem placeat perspiciatis ipsum officiis commodi necessitatibus,
          modi ipsam vero!
        </p>
      </div>
      <div>
        <a>{`Read more ->`}</a>
      </div>
    </div>
  );
};
